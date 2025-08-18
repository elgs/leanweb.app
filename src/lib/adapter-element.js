import LWElement from './lw-element.js';

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/core.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/javascript.min.js';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/xml.min.js';
import css from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/es/languages/css.min.js';

export default class AdapterElement extends LWElement {

  constructor(ast) {
    super(ast);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('css', css);

    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }
}