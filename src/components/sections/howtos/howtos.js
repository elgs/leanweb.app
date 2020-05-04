import LWElement from '~/src/lib/lw-element.js';
import ast from './ast.js';

import hljs from 'highlight.js/lib/core.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-sections-howtos',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
   }
);
