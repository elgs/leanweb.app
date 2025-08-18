import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-08',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      items = ['one', 'two', 'three'];
      chooseTwo() {
         this.picked = 'two';
      }
      picked;
   }
);
