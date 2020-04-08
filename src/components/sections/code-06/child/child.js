import LWElement from './../../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-06-child', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
      }

      addOne() {
         this.item.quantity += 1;
         this.update();
      }

      removeOne() {
         this.item.quantity -= 1;
         this.update();
      }
   }
);
