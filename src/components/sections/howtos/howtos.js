import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-howtos',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }
   }
);
