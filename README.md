# posthtml-insert-at <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

Append or prepend HTML at a selector.

Before:

```html
<html>
  <body>
    <main></main>
  </body>
</html>
```

After:

```html
<html>
  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
</html>
```

## Install

```bash
yarn add -D posthtml-insert-at
# OR
npm i posthtml posthtml-insert-at
```

## Usage

```js
const fs = require('fs');
const posthtml = require('posthtml');
const insertAt = require('posthtml-insert-at').default;

const html = fs.readFileSync('./index.html');

posthtml()
  .use(
    /**
     * The plugin accepts an object or an an array of objects
     */
    insertAt({
      /**
       * Specify the selector to append/prepend content to.
       *
       * Acceptable selectors include tagname (e.g. `main`), class (e.g. `.main`) or id (e.g. `#main`).
       */
      selector: 'main',

      /**
       * Prepend HTML markup to the selector.
       */
      prepend: `
        <header>
          <a href="/">Home</a>
        </header>
      `,

      /**
       * Append HTML markup to the selector.
       */
      append: `
        <footer>
          &copy; ${new Date().getFullYear()}
        </footer>
      `,

      /**
       * Specify whether to append/prepend content inside or outside (adjacent to) of the selector.
       *
       * The default behavior is `inside`.
       */
      behavior: 'outside'
    })
  )
  .process(html)
  .then(result => fs.writeFileSync('./after.html', result.html));
```

### Limitations

Currently, this plugin does not supported nested selectors.

### Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [contribution guide](CONTRIBUTING.md).

### License [MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-insert-at.svg
[npm-url]: https://npmjs.com/package/posthtml-insert-at
[deps]: https://david-dm.org/metonym/posthtml-insert-at.svg
[deps-url]: https://david-dm.org/metonym/posthtml-insert-at
[build]: https://travis-ci.com/metonym/posthtml-insert-at.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/posthtml-insert-at
[codecov]: https://codecov.io/gh/metonym/posthtml-insert-at
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/posthtml-insert-at.svg
