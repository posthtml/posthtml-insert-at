import { PostHTML } from 'posthtml';

interface IMatcher {
  tag?: PostHTML.StringMatcher;
  attrs?: PostHTML.AttrMatcher;
}

function createMatcher(selector: string): IMatcher {
  switch (selector.charAt(0)) {
    case '#':
      return {
        attrs: {
          id: selector.slice(1)
        }
      };
    case '.':
      return {
        attrs: {
          class: selector.slice(1)
        }
      };
    default:
      return {
        tag: selector
      };
  }
}

export { createMatcher };
