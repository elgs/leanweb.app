import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-14-dest-red',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         setInterval(() => {
            this.time = new Date(Date.now()).toLocaleString();
         }, 1000);
      }
   }
);
