import AdapterElement from '../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-section-primary',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         this.terminalData = [
            'npm i leanweb -g',
            'mkdir demo && cd demo',
            'lw init',
            'lw serve',
         ];
      }
      world = 'Leanweb';

      r = 1;
   }
);
