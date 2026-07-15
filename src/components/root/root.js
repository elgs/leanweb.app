import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('leanweb-app-root',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         const stored = localStorage.getItem('lw-theme');
         this.theme = stored === 'dark' || stored === 'light' ? stored : 'auto';
      }

      // auto (follow the system) → light → dark → auto
      cycleTheme() {
         const order = ['auto', 'light', 'dark'];
         this.theme = order[(order.indexOf(this.theme) + 1) % order.length];
         document.documentElement.dataset.theme = this.theme;
         localStorage.setItem('lw-theme', this.theme);
      }

      domReady() {
         const links = [...this.querySelectorAll('.links a')];
         const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
         const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
               if (entry.isIntersecting) {
                  links.forEach(a => a.classList.remove('active'));
                  byId.get(entry.target.id)?.classList.add('active');
               }
            });
         }, { rootMargin: '-30% 0px -60% 0px' });
         byId.forEach((_, id) => {
            const section = this.querySelector('#' + id);
            if (section) {
               spy.observe(section);
            }
         });
         // Above the first section nothing is "current" — clear the highlight.
         const hero = this.querySelector('#top');
         if (hero) {
            new IntersectionObserver(entries => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     links.forEach(a => a.classList.remove('active'));
                  }
               });
            }, { rootMargin: '-30% 0px -60% 0px' }).observe(hero);
         }
      }
   }
);
