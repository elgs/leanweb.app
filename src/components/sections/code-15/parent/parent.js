import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-15-parent',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      quantity = 0;

      onAdd(event) {
         this.quantity += event.detail;
      }
   }
);
