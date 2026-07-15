import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-inputs-child',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      item;
   }
);
