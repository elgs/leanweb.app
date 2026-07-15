/* Tiny syntax highlighter for the code samples on this page.
   Emits spans with tk-* classes; lw-* attributes and the leanweb
   API surface are tinted with the brand accent (tk-lw). */

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tk = (cls, text) => `<span class="tk-${cls}">${text}</span>`;

const JS_KEYWORDS = new Set([
  'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue',
  'default', 'delete', 'do', 'else', 'export', 'extends', 'finally', 'for',
  'from', 'function', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'of',
  'return', 'static', 'super', 'switch', 'this', 'throw', 'try', 'typeof',
  'var', 'while', 'yield',
]);

const JS_LITERALS = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);
const JS_BRAND = new Set(['leanweb', 'LWElement', 'LWEventBus']);

function js(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '/') {
      let end = src.indexOf('\n', i);
      if (end === -1) end = src.length;
      out.push(tk('comment', esc(src.slice(i, end))));
      i = end;
    } else if (c === '/' && src[i + 1] === '*') {
      let end = src.indexOf('*/', i + 2);
      end = end === -1 ? src.length : end + 2;
      out.push(tk('comment', esc(src.slice(i, end))));
      i = end;
    } else if (c === "'" || c === '"' || c === '`') {
      let j = i + 1;
      while (j < src.length && src[j] !== c) {
        if (src[j] === '\\') j++;
        j++;
      }
      j = Math.min(j + 1, src.length);
      out.push(tk('string', esc(src.slice(i, j))));
      i = j;
    } else if (/\d/.test(c) && !/[\w$]/.test(src[i - 1] ?? '')) {
      let j = i;
      while (j < src.length && /[\d._a-fA-FxXoObBeEn+-]/.test(src[j])) {
        if ((src[j] === '+' || src[j] === '-') && !/[eE]/.test(src[j - 1])) break;
        j++;
      }
      out.push(tk('number', esc(src.slice(i, j))));
      i = j;
    } else if (/[a-zA-Z_$]/.test(c)) {
      let j = i;
      while (j < src.length && /[\w$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      let k = j;
      while (src[k] === ' ') k++;
      if (JS_KEYWORDS.has(word)) out.push(tk('keyword', word));
      else if (JS_LITERALS.has(word)) out.push(tk('number', word));
      else if (JS_BRAND.has(word)) out.push(tk('lw', word));
      else if (src[k] === '(') out.push(tk('fn', esc(word)));
      else out.push(esc(word));
      i = j;
    } else if (c === '=' && src[i + 1] === '>') {
      out.push(tk('keyword', '=&gt;'));
      i += 2;
    } else if ('{}()[];,.'.includes(c)) {
      out.push(tk('punct', esc(c)));
      i++;
    } else {
      out.push(esc(c));
      i++;
    }
  }
  return out.join('');
}

function html(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    if (src.startsWith('<!--', i)) {
      let end = src.indexOf('-->', i);
      end = end === -1 ? src.length : end + 3;
      out.push(tk('comment', esc(src.slice(i, end))));
      i = end;
    } else if (src[i] === '<') {
      let j = i + 1;
      if (src[j] === '/') j++;
      const nameStart = j;
      while (j < src.length && /[\w-]/.test(src[j])) j++;
      const name = src.slice(nameStart, j);
      out.push(tk('punct', esc(src.slice(i, nameStart))));
      out.push(tk(name.startsWith('lw-') ? 'lw' : 'tag', esc(name)));
      while (j < src.length && src[j] !== '>') {
        if (/[a-zA-Z]/.test(src[j])) {
          const attrStart = j;
          while (j < src.length && /[\w:,$-]/.test(src[j])) j++;
          const attr = src.slice(attrStart, j);
          out.push(tk(attr.startsWith('lw') ? 'lw' : 'attr', esc(attr)));
          if (src[j] === '=') {
            out.push(tk('punct', '='));
            j++;
            const q = src[j];
            if (q === "'" || q === '"') {
              let ve = j + 1;
              while (ve < src.length && src[ve] !== q) ve++;
              ve = Math.min(ve + 1, src.length);
              out.push(tk('string', esc(src.slice(j, ve))));
              j = ve;
            }
          }
        } else {
          out.push(esc(src[j]));
          j++;
        }
      }
      if (src[j] === '>') {
        out.push(tk('punct', '&gt;'));
        j++;
      }
      i = j;
    } else {
      let j = src.indexOf('<', i);
      if (j === -1) j = src.length;
      out.push(esc(src.slice(i, j)));
      i = j;
    }
  }
  return out.join('');
}

function css(src) {
  const out = [];
  let i = 0;
  let inBlock = false;
  while (i < src.length) {
    const c = src[i];
    if (c === '/' && src[i + 1] === '*') {
      let end = src.indexOf('*/', i + 2);
      end = end === -1 ? src.length : end + 2;
      out.push(tk('comment', esc(src.slice(i, end))));
      i = end;
    } else if (c === '{' || c === '}' || c === ';' || c === ':') {
      if (c === '{') inBlock = true;
      if (c === '}') inBlock = false;
      out.push(tk('punct', esc(c)));
      i++;
    } else if (/\d/.test(c)) {
      let j = i;
      while (j < src.length && /[\d.%a-z]/i.test(src[j])) j++;
      out.push(tk('number', esc(src.slice(i, j))));
      i = j;
    } else if (/[a-zA-Z-]/.test(c)) {
      let j = i;
      while (j < src.length && /[\w-]/.test(src[j])) j++;
      const word = src.slice(i, j);
      let k = j;
      while (src[k] === ' ') k++;
      if (!inBlock) out.push(tk('tag', esc(word)));
      else if (src[k] === ':') out.push(tk('attr', esc(word)));
      else out.push(esc(word));
      i = j;
    } else if (c === '.' || c === '#' || c === '&') {
      out.push(tk('tag', esc(c)));
      i++;
    } else {
      out.push(esc(c));
      i++;
    }
  }
  return out.join('');
}

const languages = { js, html, css };

export function highlight(src, lang) {
  const fn = languages[lang];
  return fn ? fn(src) : esc(src);
}
