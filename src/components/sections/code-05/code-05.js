import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import agate from 'highlight.js/scss/agate.scss';

customElements.define('leanweb-app-sections-code-05',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         super.applyStyles(agate);
         hljs.registerLanguage('javascript', javascript, xml);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('scss', scss);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
         });
      }

      imgSrc = 'https://leanweb.app/images/az.gif';
      imageWidth = 400;
      title = 'Beautiful Arizona';
   }
);
