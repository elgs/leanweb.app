import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-forms-select',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      zones = ['UTC', 'America/Phoenix', 'Asia/Tokyo'];
      zone = 'America/Phoenix';

      people = ['Ada', 'Grace', 'Linus'];
      crew = ['Ada'];
   }
);
