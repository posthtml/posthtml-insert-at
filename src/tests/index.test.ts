import posthtml from 'posthtml';
import insertAt from '../';
import { testCases } from './__fixtures__/testCases';

describe('insertAt', () => {
  testCases.forEach(testCase => {
    test(`'${testCase.name}' matches the snapshot`, () => {
      posthtml()
        .use(insertAt(testCase.options))
        .process(testCase.input)
        .then((result: { html: string }) => {
          expect(result.html).toMatchSnapshot();
        });
    });
  });
});
