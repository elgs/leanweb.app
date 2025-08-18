import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-05',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      imgSrc = '/resources/images/arizona.jpg';
      imageWidth = 400;
      title = 'Beautiful Arizona';
   }
);
