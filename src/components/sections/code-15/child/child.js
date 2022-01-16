import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-15-child',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      add(by) {
         this.dispatchEvent(new CustomEvent('add', {
            detail: by
         }));
      }
   }
);
