import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-06-parent',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      item = {
         name: 'Banana',
         quantity: 1,
      };
   }
);
