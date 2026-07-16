import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

// The live-result frame used across the page. Whatever a section writes
// between <leanweb-app-window> tags is projected through <lw-slot> and
// keeps belonging to that section: its expressions, its handlers, its
// updates.
customElements.define('leanweb-app-window',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      // The bar stays bare unless a section asks for a label (the CLI's
      // "terminal"); no default — a result frame speaks for itself.
      domReady() {
         const label = this.getAttribute('label');
         if (label) {
            this.querySelector('.bar > .title').textContent = label;
         }
      }
   }
);
