import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-bus-sub',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      listener = null;

      listen() {
         this.listener = leanweb.eventBus.addEventListener('tick', event => {
            this.time = event.data;
            this.update();
         });
      }

      mute() {
         leanweb.eventBus.removeEventListener(this.listener);
         this.listener = null;
      }
   }
);
