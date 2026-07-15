import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-update-red',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         setInterval(() => {
            this.time = new Date().toLocaleTimeString();
         }, 1000);
      }
   }
);
