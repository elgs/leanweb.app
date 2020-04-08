import LWElement from './../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-08', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }

      items = ['one', 'two', 'three'];
      chooseTwo() {
         this.picked = 'two';
         this.update();
      }
      picked;
   }
);
