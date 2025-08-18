import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-00',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      world = 'Leanweb';
   }
);
