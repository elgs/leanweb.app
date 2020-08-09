import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'highlight.js/lib/core.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import xml from 'highlight.js/lib/languages/xml.js';
import scss from 'highlight.js/lib/languages/scss.js';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-section-primary',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);

         this.terminalData = [
            'npm install leanweb -g',
            'mkdir demo && cd demo',
            'lw init',
            'lw serve',
         ];

         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      name = 'Leanweb';
      me = this;

      r = 1;
   }
);
