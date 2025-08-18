import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-13',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      array2d = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
      ];

      reset() {
         this.array2d.forEach(a => a.fill(0));
      }
   }
);
