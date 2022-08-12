import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

import hljs from '/node_modules/highlight.js/lib/core.js';
import javascript from '/node_modules/highlight.js/lib/languages/javascript.js';
import xml from '/node_modules/highlight.js/lib/languages/xml.js';
import scss from '/node_modules/highlight.js/lib/languages/scss.js';

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
