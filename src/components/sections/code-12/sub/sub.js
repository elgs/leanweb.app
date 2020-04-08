import LWElement from './../../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-12-sub', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
      }
      sub() {
         this.listener = LWElement.eventBus.addEventListener('time', event => {
            this.time = event.data;
            this.update();
         });
         this.subscribed = true;
         this.update();
      }

      unsub() {
         LWElement.eventBus.removeEventListener(this.listener);
         this.subscribed = false;
         this.update();
      }
   }
);
