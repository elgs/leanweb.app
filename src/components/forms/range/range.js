import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-forms-range',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      volume = 7;
   }
);
