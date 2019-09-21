import { PostHTML } from 'posthtml';
import { createMatcher } from './createMatcher';
import { insertNode } from './insertNode';

function insertAt(options: Options) {
  return function plugin(tree: PostHTML.Node) {
    const opts = Array.isArray(options) ? options : [options];

    opts.forEach(option => {
      const matcher = createMatcher(option.selector.trim());
      const behavior = option.behavior || 'inside';

      if (behavior === 'inside') {
        tree.match(matcher, node => {
          return insertNode({ node, option, content: [node.content] });
        });
      } else {
        let siblingNode = {};

        tree.match(matcher, node => {
          siblingNode = node;
          return node;
        });

        const matchingNode = siblingNode as PostHTML.RawNode;

        tree.match({ content: [matcher] }, node =>
          insertNode({ node, option, content: [matchingNode] })
        );
      }
    });
  };
}

export { insertAt };

type Options = IInsertAtData | IInsertAtData[];

export interface IInsertAtData {
  selector: string;
  behavior?: 'inside' | 'outside';
  append?: string;
  prepend?: string;
}
