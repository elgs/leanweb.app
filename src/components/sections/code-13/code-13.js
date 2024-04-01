import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/core.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/javascript.min.js';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/xml.min.js';
import css from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/css.min.js';


customElements.define('leanweb-app-sections-code-13',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         
         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('css', css);
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
