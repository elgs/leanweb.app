import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-direct',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      score = 0;

      add(points) {
         this.score += points;
         this.update();
      }
   }
);
