import LWElement from './../../lib/lw-element.js';
import interpolation from './ast.js';
import * as terminalData from '~/src/shared/terminal-data.js';

const component = { id: 'leanweb-app-section-primary', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.terminalData = terminalData;
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      name = 'Leanweb';
   }
);
