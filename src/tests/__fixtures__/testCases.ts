import { IInsertAtData } from "../../insertAt";

interface ITestCase {
  name: string;
  input: string;
  options: IInsertAtData | IInsertAtData[];
}

const testCases: ITestCase[] = [
  {
    name: "Append/prepend inside",
    input: `
      <html>
        <body>
          <main>text</main>
        </body>
      </html>
    `,
    options: {
      selector: "main",
      prepend: "<header></header>",
      append: "<footer></footer>",
      behavior: "inside",
    },
  },
  {
    name: "Append/prepend outside",
    input: `
      <html>
        <body>
          <main>text</main>
        </body>
      </html>
    `,
    options: {
      selector: "main",
      prepend: "<header></header>",
      append: "<footer></footer>",
      behavior: "outside",
    },
  },
  {
    name: "Behavior not specified",
    input: `
      <html>
        <body>
          <main>text</main>
        </body>
      </html>
    `,
    options: {
      selector: "main",
      append: "<footer></footer>",
    },
  },
  {
    name: "Multiple class selector",
    input: `
      <html>
        <body>
          <main class="foo bar">text</main>
        </body>
      </html>
    `,
    options: {
      selector: ".foo",
      append: "<div>content</div>",
    },
  },
  {
    name: "Element/class selector",
    input: `
      <html>
        <body>
          <main class="foo bar">text</main>
        </body>
      </html>
    `,
    options: {
      selector: "main.bar",
      append: "<div>content</div>",
    },
  },
  {
    name: "Options is an array",
    input: `
      <html>
        <body>
          <main>text</main>
          <div id="content"></div>
        </body>
      </html>
    `,
    options: [
      {
        selector: "main",
        append: "<footer></footer>",
      },
      {
        selector: "#content",
        prepend: "<footer></footer>",
        behavior: "inside",
      },
    ],
  },
];

export { testCases };
