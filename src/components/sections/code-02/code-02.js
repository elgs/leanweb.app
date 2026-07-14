import AdapterElement from '../../../lib/adapter-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-sections-code-02',
   class extends AdapterElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      items = ['one', 'two', 'three'];

      people = [
         { id: 1, name: 'Alice' },
         { id: 2, name: 'Bob' },
         { id: 3, name: 'Carol' },
      ];

      reversePeople() {
         this.people.reverse();
      }
   }
);
