import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-slot',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      clicks = 0;
      note = '';

      header = { title: 'Results' };
      renames = 0;
      loadedAt = new Date().toLocaleTimeString();

      reload() {
         this.loadedAt = new Date().toLocaleTimeString();
      }

      renamePanel() {
         this.header.title = 'Results v' + (++this.renames);
      }
   }
);
