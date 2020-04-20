import LWElement from './../../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-06-parent', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
      }

      item = {
         name: 'Banana',
         quantity: 1,
      };

      updateQuantity() {
      }
   }
);
