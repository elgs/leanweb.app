import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-grid',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      board = [
         [1, 2, 3],
         [4, 5, 6],
      ];

      total() {
         return this.board.flat().reduce((a, b) => a + b, 0);
      }
   }
);
