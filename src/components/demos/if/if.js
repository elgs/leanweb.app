import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-if',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      on = true;
   }
);
