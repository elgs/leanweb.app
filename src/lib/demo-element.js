/* Base class for the demo sections on this page.
   On domReady it turns each

     <div class="code-block" data-file="app.html"><pre><code>
        escaped sample code
     </code></pre></div>

   into a highlighted panel with a filename bar and a copy button.
   The language comes from the data-file extension; indentation
   common to all lines is stripped, so samples can be written
   naturally indented inside the component HTML. */

import LWElement from './lw-element.js';
import { highlight } from './highlight.js';

const COPY_ICON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5"/><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"/></svg>';
const CHECK_ICON = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8.5 6.5 12 13 4.5"/></svg>';

function dedent(text) {
  const lines = text.split('\n');
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
  return lines.map(l => l.slice(indent)).join('\n');
}

export default class DemoElement extends LWElement {
  domReady() {
    this.querySelectorAll('.code-block').forEach(block => {
      if (block.querySelector('.file')) {
        return;
      }
      const code = block.querySelector('pre > code');
      if (!code) {
        return;
      }
      const raw = dedent(code.textContent);
      const file = block.dataset.file ?? '';
      code.innerHTML = highlight(raw, file.split('.').pop());

      const bar = document.createElement('div');
      bar.className = 'file';
      const name = document.createElement('span');
      name.textContent = file;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = COPY_ICON;
      btn.addEventListener('click', async () => {
        await navigator.clipboard.writeText(raw);
        btn.innerHTML = CHECK_ICON;
        btn.classList.add('done');
        setTimeout(() => {
          btn.innerHTML = COPY_ICON;
          btn.classList.remove('done');
        }, 1400);
      });
      bar.append(name, btn);
      block.prepend(bar);
    });
  }
}
