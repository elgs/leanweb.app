import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-sections-code-14',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }

      updateAll() {
         leanweb.updateComponents();
      }

      updateRed() {
         leanweb.updateComponents('leanweb-app-sections-code-14-dest-red');
      }

      updateBlue() {
         leanweb.updateComponents('leanweb-app-sections-code-14-dest-blue');
      }
   }
);
