import DemoElement from './../../lib/demo-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-hero',
   class extends DemoElement {  // DemoElement extends LWElement
      constructor() {
         super(ast);
      }

      r = 5;
      copied = false;

      copyInstall() {
         navigator.clipboard.writeText('npm i -g leanweb');
         this.copied = true;
         setTimeout(() => {
            this.copied = false;
            this.update();
         }, 1400);
      }
   }
);
