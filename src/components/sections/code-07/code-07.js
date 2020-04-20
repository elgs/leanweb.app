import LWElement from './../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-07', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }

      items = ['one', 'two', 'three'];
      toggleCheckboxes() {
         if (this.checkedValues.length) {
            this.checkedValues.length = 0;
         } else {
            this.checkedValues = [...this.items];
         }
      }
      checkedValues = [];
   }
);
