import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-01',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      love = true;
   }
);
