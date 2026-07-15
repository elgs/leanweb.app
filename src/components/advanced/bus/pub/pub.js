import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-bus-pub',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         setInterval(() => {
            this.time = new Date().toLocaleTimeString();
            leanweb.eventBus.dispatchEvent('tick', this.time);
            this.update();
         }, 1000);
      }
   }
);
