const fs = require('fs');
const posthtml = require('posthtml');
const { insertAt } = require('posthtml-insert-at');

const html = fs.readFileSync('./index.html');

posthtml()
  .use(
    insertAt({
      selector: 'main',
      append: `
        <footer>
          &copy; ${new Date().getFullYear()}
        </footer>
      `,
      behavior: 'outside'
    })
  )
  .process(html)
  .then(result => fs.writeFileSync('./after.html', result.html));
