import AdapterElement from '../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-section-primary',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }
      world = 'Leanweb';

      r = 1;
   }
);
