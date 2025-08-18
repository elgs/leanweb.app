import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-10',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      items = ['one', 'two', 'three'];
      toggleAllOptions() {
         if (this.selectedOptions.length) {
            this.selectedOptions.length = 0;
         } else {
            this.selectedOptions = [...this.items];
         }
      }
      selectedOptions = [];
   }
);
