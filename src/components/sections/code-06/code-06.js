import LWElement from './../../../lib/lw-element.js';
import ast from './ast.js';

import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/core.min.js';
import javascript from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/javascript.min.js';
import xml from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/xml.min.js';
import css from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/es/languages/css.min.js';


customElements.define('leanweb-app-sections-code-06',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         
         hljs.registerLanguage('javascript', javascript);
         hljs.registerLanguage('html', xml);
         hljs.registerLanguage('css', css);
         this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
         });
      }

      // derived from LWElement
      // domReady() {
      //    console.log('Dom is ready');
      // }

      // inputReady() {
      //    console.log('input is ready');
      // }

      // derived from HTMLElement
      // connectedCallback() {
      //    console.log(this.isConnected);
      //    console.log('Element added to page.');
      // }

      // disconnectedCallback() {
      //    console.log('Element removed from page.');
      // }

      // adoptedCallback() {
      //    console.log('Element moved to new page.');
      // }

      // static get observedAttributes() {
      //    return [];
      // }

      // attributeChangedCallback(name, oldValue, newValue) {
      //    console.log(name, oldValue, newValue);
      // }
   }
);
