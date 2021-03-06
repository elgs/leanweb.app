import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-12-sub',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }
      sub() {
         this.listener = leanweb.eventBus.addEventListener('time', event => {
            this.time = event.data;
            this.update();
         });
         this.subscribed = true;
      }

      unsub() {
         leanweb.eventBus.removeEventListener(this.listener);
         this.subscribed = false;
      }
   }
);
