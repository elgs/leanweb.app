import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-slot-card',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      title = 'demo-card chrome';
   }
);
