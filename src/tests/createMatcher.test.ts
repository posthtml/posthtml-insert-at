import { createMatcher } from '../createMatcher';

describe('Create Matcher', () => {
  test('tag', () => {
    expect(createMatcher('main')).toEqual({
      tag: 'main'
    });
  });

  test('class', () => {
    expect(createMatcher('.main')).toEqual({
      attrs: {
        class: 'main'
      }
    });
  });

  test('id', () => {
    expect(createMatcher('#main')).toEqual({
      attrs: {
        id: 'main'
      }
    });
  });
});
