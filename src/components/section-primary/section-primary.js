import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/core.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/javascript.min.js';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/xml.min.js';
import scss from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/scss.min.js';

customElements.define('leanweb-app-section-primary',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         this.terminalData = [
            'npm i leanweb -g',
            'mkdir demo && cd demo',
            'lw init',
            'lw serve',
         ];

         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }
      world = 'Leanweb';

      r = 1;
   }
);
