import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';




customElements.define('leanweb-app-sections-code-09',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      items = ['one', 'two', 'three'];
      selectTwo() {
         this.selectedOption = 'two';
      }
      selectedOption;
   }
);
