import LWElement from './../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-section-primary', interpolation };
customElements.define(component.id,
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(component);
         this.terminalData = [
            'npm install leanweb -g',
            'mkdir demo && cd demo',
            'lw init',
            'lw serve',
         ];
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      name = 'Leanweb';
   }
);
