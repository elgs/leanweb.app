import LWElement from './../../lib/lw-element.js';
import interpolation from './ast.js';

const component = { id: 'leanweb-app-root', interpolation };
customElements.define(component.id,
  class extends LWElement {  // LWElement extends HTMLElement
    constructor() {
      super(component);
    }
  }
);
