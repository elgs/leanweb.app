import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-root',
  class extends LWElement {  // LWElement extends HTMLElement
    constructor() {
      super(ast);
    }
  }
);
