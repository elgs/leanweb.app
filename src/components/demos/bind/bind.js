import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-bind',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      src = 'resources/images/arizona.jpg';
      width = 240;
   }
);
