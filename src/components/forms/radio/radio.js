import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-forms-radio',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      modes = ['Walk', 'Bike', 'Transit'];
      mode = 'Bike';
   }
);
