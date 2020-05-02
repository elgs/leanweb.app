import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';

customElements.define('leanweb-app-sections-code-10',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         hljs.registerLanguage('javascript', javascript, xml);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }
      items = ['one', 'two', 'three'];
      toggleAllOptions() {
         if (this.selectedOptions.length) {
            this.selectedOptions.length = 0;
         } else {
            this.selectedOptions = [...this.items];
         }
      }
      selectedOptions = [];
   }
);
