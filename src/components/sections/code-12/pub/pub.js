import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-12-pub',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         setInterval(() => {
            this.time = new Date(Date.now()).toLocaleString();
            leanweb.eventBus.dispatchEvent('time', this.time);
            this.update();
         }, 1000);
      }
   }
);
