import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from '/node_modules/highlight.js/lib/core.js';
import javascript from '/node_modules/highlight.js/lib/languages/javascript.js';
import xml from '/node_modules/highlight.js/lib/languages/xml.js';
import scss from '/node_modules/highlight.js/lib/languages/scss.js';


customElements.define('leanweb-app-sections-code-14',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         
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
