import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-14-src',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      updateAll() {
         LWElement.updateComponents();
      }

      updateRed() {
         LWElement.updateComponents('leanweb-app-sections-code-14-dest-red');
      }

      updateBlue() {
         LWElement.updateComponents('leanweb-app-sections-code-14-dest-blue');
      }
   }
);
