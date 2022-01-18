import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from '/node_modules/highlight.js/lib/core.js';
import javascript from '/node_modules/highlight.js/lib/languages/javascript.js';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-sections-howtos',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }
   }
);
