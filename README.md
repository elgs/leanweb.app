# leanweb.app

Source of the [leanweb.app](https://leanweb.app) website — itself a Leanweb
project: light DOM, `shadowDom: false`, and every live demo frame on the page
is projected through `lw-slot`.

## Run it locally

```bash
$ npm i -g leanweb
$ git clone https://github.com/elgs/leanweb.app
$ cd leanweb.app
$ lw serve
```

`lw dist` builds the production site into `dist/`; the `post-dist` script
copies `robots.txt` and `sitemap.xml` into place.
