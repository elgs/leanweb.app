import LWElement from './../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-10', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      items = ['one', 'two', 'three'];
      toggleAllOptions() {
         if (this.selectedOptions.length) {
            this.selectedOptions.length = 0;
         } else {
            this.selectedOptions = [...this.items];
         }
         this.update();
      }
      selectedOptions = [];
   }
);
