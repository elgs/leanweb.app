import LWElement from './../../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-12-pub', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         setInterval(() => {
            this.time = new Date(Date.now()).toLocaleString();
            LWElement.eventBus.dispatchEvent('time', this.time);
            this.update();
         }, 1000);
      }
   }
);
