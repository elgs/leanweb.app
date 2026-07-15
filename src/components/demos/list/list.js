import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-list',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      planets = ['Mercury', 'Venus', 'Earth'];

      people = [
         { id: 1, name: 'Ada' },
         { id: 2, name: 'Grace' },
      ];
   }
);
