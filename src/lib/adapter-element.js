import LWElement from './lw-element.js';

const JS_KEYWORDS = new Set([
  'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'export', 'extends',
  'finally', 'for', 'from', 'function', 'if', 'import', 'in', 'instanceof',
  'let', 'new', 'of', 'return', 'static', 'super', 'switch', 'this',
  'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield',
]);

const JS_LITERALS = new Set(['true', 'false', 'null', 'undefined']);

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function span(cls, text) {
  return `<span class="sh-${cls}">${text}</span>`;
}

function highlightJS(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    // Line comment
    if (src[i] === '/' && src[i + 1] === '/') {
      let end = src.indexOf('\n', i);
      if (end === -1) end = src.length;
      out.push(span('comment', esc(src.slice(i, end))));
      i = end;
      continue;
    }
    // Block comment
    if (src[i] === '/' && src[i + 1] === '*') {
      let end = src.indexOf('*/', i + 2);
      end = end === -1 ? src.length : end + 2;
      out.push(span('comment', esc(src.slice(i, end))));
      i = end;
      continue;
    }
    // Strings
    if (src[i] === "'" || src[i] === '"' || src[i] === '`') {
      const q = src[i];
      let j = i + 1;
      while (j < src.length && src[j] !== q) {
        if (src[j] === '\\') j++;
        j++;
      }
      j = Math.min(j + 1, src.length);
      out.push(span('string', esc(src.slice(i, j))));
      i = j;
      continue;
    }
    // Numbers
    if (/\d/.test(src[i]) && (i === 0 || /[\s(,=+\-*/:[\]{};!<>]/.test(src[i - 1]))) {
      let j = i;
      while (j < src.length && /[\d.xXa-fA-FeEn]/.test(src[j])) j++;
      out.push(span('number', esc(src.slice(i, j))));
      i = j;
      continue;
    }
    // Words (keywords, literals, identifiers)
    if (/[a-zA-Z_$]/.test(src[i])) {
      let j = i;
      while (j < src.length && /[a-zA-Z0-9_$]/.test(src[j])) j++;
      const word = src.slice(i, j);
      if (JS_KEYWORDS.has(word)) {
        out.push(span('keyword', word));
      } else if (JS_LITERALS.has(word)) {
        out.push(span('literal', word));
      } else {
        // Check if it's a function call
        let k = j;
        while (k < src.length && src[k] === ' ') k++;
        if (src[k] === '(') {
          out.push(span('fn', esc(word)));
        } else {
          out.push(esc(word));
        }
      }
      i = j;
      continue;
    }
    // Arrow
    if (src[i] === '=' && src[i + 1] === '>') {
      out.push(span('keyword', '=&gt;'));
      i += 2;
      continue;
    }
    // Punctuation
    if ('{}()[];,.'.includes(src[i])) {
      out.push(span('punct', esc(src[i])));
      i++;
      continue;
    }
    out.push(esc(src[i]));
    i++;
  }
  return out.join('');
}

function highlightHTML(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    // Comment
    if (src.startsWith('<!--', i)) {
      let end = src.indexOf('-->', i);
      end = end === -1 ? src.length : end + 3;
      out.push(span('comment', esc(src.slice(i, end))));
      i = end;
      continue;
    }
    // Tags
    if (src[i] === '<') {
      let j = i + 1;
      const isClosing = src[j] === '/';
      if (isClosing) j++;
      // Tag name
      let nameStart = j;
      while (j < src.length && /[a-zA-Z0-9\-]/.test(src[j])) j++;
      const tagName = src.slice(nameStart, j);
      let tagContent = esc(src.slice(i, nameStart)) + span('tag', esc(tagName));
      // Attributes
      while (j < src.length && src[j] !== '>') {
        if (/[a-zA-Z\-:]/.test(src[j])) {
          let as = j;
          while (j < src.length && /[a-zA-Z0-9\-:.$]/.test(src[j])) j++;
          tagContent += span('attr', esc(src.slice(as, j)));
          // =value
          if (src[j] === '=') {
            tagContent += '=';
            j++;
            if (src[j] === "'" || src[j] === '"') {
              const q = src[j];
              let ve = j + 1;
              while (ve < src.length && src[ve] !== q) ve++;
              ve++;
              tagContent += span('string', esc(src.slice(j, ve)));
              j = ve;
            }
          }
        } else {
          tagContent += esc(src[j]);
          j++;
        }
      }
      if (j < src.length) {
        tagContent += esc(src[j]); // >
        j++;
      }
      out.push(span('bracket', tagContent));
      i = j;
      continue;
    }
    out.push(esc(src[i]));
    i++;
  }
  return out.join('');
}

function highlightCSS(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    // Comments
    if (src[i] === '/' && src[i + 1] === '*') {
      let end = src.indexOf('*/', i + 2);
      end = end === -1 ? src.length : end + 2;
      out.push(span('comment', esc(src.slice(i, end))));
      i = end;
      continue;
    }
    // Strings
    if (src[i] === "'" || src[i] === '"') {
      const q = src[i];
      let j = i + 1;
      while (j < src.length && src[j] !== q) j++;
      j++;
      out.push(span('string', esc(src.slice(i, j))));
      i = j;
      continue;
    }
    // Selectors & properties — color words before { and after ;/{
    if (src[i] === '{' || src[i] === '}' || src[i] === ';') {
      out.push(span('punct', esc(src[i])));
      i++;
      continue;
    }
    // Property names (word followed by colon, not inside a value)
    if (/[a-zA-Z\-]/.test(src[i])) {
      let j = i;
      while (j < src.length && /[a-zA-Z0-9\-_]/.test(src[j])) j++;
      const word = src.slice(i, j);
      // Peek ahead for colon
      let k = j;
      while (k < src.length && src[k] === ' ') k++;
      if (src[k] === ':' && src[k + 1] !== ':') {
        out.push(span('attr', esc(word)));
      } else if (src[i] === '.' || (i > 0 && src[i - 1] === '.')) {
        out.push(span('tag', esc(word)));
      } else {
        out.push(esc(word));
      }
      i = j;
      continue;
    }
    // Numbers with units
    if (/\d/.test(src[i])) {
      let j = i;
      while (j < src.length && /[\d.%a-zA-Z]/.test(src[j])) j++;
      out.push(span('number', esc(src.slice(i, j))));
      i = j;
      continue;
    }
    // . for class selectors
    if (src[i] === '.' && /[a-zA-Z]/.test(src[i + 1])) {
      let j = i + 1;
      while (j < src.length && /[a-zA-Z0-9\-_]/.test(src[j])) j++;
      out.push(span('tag', esc(src.slice(i, j))));
      i = j;
      continue;
    }
    out.push(esc(src[i]));
    i++;
  }
  return out.join('');
}

const highlighters = {
  javascript: highlightJS,
  html: highlightHTML,
  css: highlightCSS,
};

export default class AdapterElement extends LWElement {

  constructor(ast) {
    super(ast);
    this.shadowRoot.querySelectorAll('.code-block').forEach((block) => {
      const code = block.querySelector('pre code');
      if (!code) return;

      const raw = code.textContent;
      const lang = [...code.classList].find(c => highlighters[c]);
      if (lang) {
        code.innerHTML = highlighters[lang](raw);
      }

      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerHTML = '<i class="ui-icon ui-icon-copy"></i>';
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(raw.trim());
        btn.innerHTML = '<i class="ui-icon ui-icon-check"></i>';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = '<i class="ui-icon ui-icon-copy"></i>';
          btn.classList.remove('copied');
        }, 1500);
      });
      block.appendChild(btn);
    });
  }
}
