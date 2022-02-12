const fs = require("fs");
const posthtml = require("posthtml");
const { insertAt } = require("posthtml-insert-at");

const html = fs.readFileSync("./src/index.html");

posthtml()
  .use(
    insertAt({
      selector: ".foo",
      append: `
        <footer id="footer">
          &copy; ${new Date().getFullYear()}
        </footer>
      `,
      behavior: "outside",
    })
  )
  .process(html)
  .then((result) => fs.writeFileSync("./src/after.html", result.html));
