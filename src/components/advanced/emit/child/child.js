import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-emit-child',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      send(n) {
         this.dispatchEvent(new CustomEvent('add', { detail: n }));
      }
   }
);
