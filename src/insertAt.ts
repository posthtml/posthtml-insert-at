import { INode, ITree } from 'posthtml';
import { createMatcher } from './createMatcher';
import { insertNode } from './insertNode';

function insertAt(options: Options) {
  return function plugin(tree: ITree) {
    const opts = Array.isArray(options) ? options : [options];

    opts.forEach(option => {
      const matcher = createMatcher(option.selector.trim());
      const behavior = option.behavior || 'inside';

      if (behavior === 'inside') {
        tree.match(matcher, node =>
          insertNode({ node, option, content: [node.content as INode] })
        );
      } else {
        let siblingNode = {};

        tree.match(matcher, node => {
          siblingNode = node;
          return node;
        });

        tree.match({ content: [matcher] }, node =>
          insertNode({ node, option, content: [siblingNode] })
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
