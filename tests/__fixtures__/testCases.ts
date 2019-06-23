import { IInsertAtData } from '../../src';

interface ITestCase {
  name: string;
  input: string;
  options: IInsertAtData | IInsertAtData[];
}

const testCases: ITestCase[] = [
  {
    name: 'Append/prepend inside',
    input: `
      <html>
        <body>
          <main>text</main>
        </body>
      </html>
    `,
    options: {
      selector: 'main',
      prepend: '<header></header>',
      append: '<footer></footer>',
      behavior: 'inside'
    }
  },
  {
    name: 'Append/prepend outside',
    input: `
      <html>
        <body>
          <main>text</main>
        </body>
      </html>
    `,
    options: {
      selector: 'main',
      prepend: '<header></header>',
      append: '<footer></footer>',
      behavior: 'outside'
    }
  }
];

export { testCases };
