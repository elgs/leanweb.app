import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-classes',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      sizes = ['Small', 'Medium', 'Large'];
      picked = 1;
   }
);
