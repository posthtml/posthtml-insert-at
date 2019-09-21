import { PostHTML } from 'posthtml';

function createMatcher(selector: string): ICreateMatcherResult {
  switch (selector.charAt(0)) {
    case '#':
      return { attrs: { id: selector.slice(1) } };
    case '.':
      return { attrs: { class: selector.slice(1) } };
    default:
      return { tag: selector };
  }
}

interface ICreateMatcherResult {
  tag?: PostHTML.StringMatcher;
  attrs?: PostHTML.AttrMatcher;
}

export { createMatcher };
