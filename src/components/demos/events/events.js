import DemoElement from './../../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-demos-events',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      count = 0;
      last = 'nothing seen yet';

      seen(event, node) {
         this.last = event.type + ' on <' + node.localName + '>';
      }
   }
);
