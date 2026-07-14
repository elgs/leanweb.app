import LWElement from './../../../../lib/lw-element.js';
import ast from './ast.js';

// The demo's control panel is its own component so a click updates only
// THIS component (parent updates propagate to children — and the cards are
// siblings, not children), which is what lets the buttons demonstrate
// selective cross-component updates through the event bus.
customElements.define('leanweb-app-sections-code-14-buttons',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      updateAll() {
         leanweb.updateComponents();
      }

      updateRed() {
         leanweb.updateComponents('leanweb-app-sections-code-14-dest-red');
      }

      updateBlue() {
         leanweb.updateComponents('leanweb-app-sections-code-14-dest-blue');
      }
   }
);
