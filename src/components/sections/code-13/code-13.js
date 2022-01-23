import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from '/node_modules/highlight.js/lib/core.js';
import javascript from '/node_modules/highlight.js/lib/languages/javascript.js';
import xml from '/node_modules/highlight.js/lib/languages/xml.js';
import scss from '/node_modules/highlight.js/lib/languages/scss.js';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-sections-code-13',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         hljs.registerLanguage('javascript', javascript);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }
      array2d = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
      ];

      reset() {
         this.array2d.forEach(a => a.fill(0));
      }
   }
);
