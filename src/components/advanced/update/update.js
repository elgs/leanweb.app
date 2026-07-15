import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-update',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }
   }
);
