import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-footer',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      year = new Date().getFullYear();
   }
);
