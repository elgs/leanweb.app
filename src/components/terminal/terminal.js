import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-terminal',
  class extends LWElement {  // LWElement extends HTMLElement
    constructor() {
      super(ast);
      const width = this.getAttribute('width');
      if (width) {
        this.shadowRoot.querySelector('.window').style.width = width + 'px';
      }
    }
  }
);
