import LWElement from './../../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-sections-code-13', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      array2d = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
      ];

      reset() {
         this.array2d.forEach(a => a.fill(0));
      }
   }
);
