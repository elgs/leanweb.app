import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-06-child',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      addOne() {
         this.item.quantity += 1;
      }

      removeOne() {
         this.item.quantity -= 1;
      }
   }
);
