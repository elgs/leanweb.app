import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-inputs',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      item = { name: 'Espresso', qty: 1 };
   }
);
