import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-forms-checkbox',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      toppings = ['olives', 'feta', 'basil'];
      chosen = ['basil'];
      extraCheese = false;
   }
);
