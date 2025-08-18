import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-07',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      // Multiple chechboxes bound to an array
      items = ['one', 'two', 'three'];
      toggleCheckboxes() {
         if (this.checkedValues.length) {
            this.checkedValues.length = 0;
         } else {
            this.checkedValues = [...this.items];
         }
      }
      checkedValues = [];

      // Single checkbox bound to a boolean value
      checked = false;
      toggleCheckbox() {
         this.checked = !this.checked;
      }
   }
);
