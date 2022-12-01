import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/core.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/javascript.min.js';


customElements.define('leanweb-app-sections-howtos',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         
         hljs.registerLanguage('javascript', javascript);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }
   }
);
