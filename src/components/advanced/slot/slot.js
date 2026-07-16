import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-advanced-slot',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      clicks = 0;
      note = '';
      stars = 0;

      header = { title: 'Results' };
      renames = 0;
      loadedAt = new Date().toLocaleTimeString();

      star() {
         this.stars++;
      }

      reset() {
         this.stars = 0;
      }

      reload() {
         this.loadedAt = new Date().toLocaleTimeString();
      }

      renamePanel() {
         this.header.title = 'Results v' + (++this.renames);
      }
   }
);
