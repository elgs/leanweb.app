import LWElement from './../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-terminal', interpolation };
customElements.define(component.id,
  class extends LWElement {  // LWElement extends HTMLElement
    constructor() {
      super(component);
      const width = this.getAttribute('width');
      if (width) {
        this.shadowRoot.querySelector('.window').style.width = width + 'px';
      }
    }
  }
);
