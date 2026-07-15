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

      domReady() {
         this.querySelector('.bar > .title').textContent = this.getAttribute('label') ?? 'result';
      }
   }
);
