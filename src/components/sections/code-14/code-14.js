import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-14',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
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
