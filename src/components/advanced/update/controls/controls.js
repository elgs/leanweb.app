import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

// The buttons live in their own component so a click re-renders only this
// component: the clock cards are siblings, so they can only be reached
// through leanweb.updateComponents — which is the point of the demo.
customElements.define('leanweb-app-advanced-update-controls',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      all() { leanweb.updateComponents(); }
      red() { leanweb.updateComponents('leanweb-app-advanced-update-red'); }
      blue() { leanweb.updateComponents('leanweb-app-advanced-update-blue'); }
   }
);
