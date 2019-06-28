import { createMatcher } from './createMatcher';
import { insertNode } from './insertNode';

function posthtmlInsertAt(options: Options) {
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

export { posthtmlInsertAt };

type Options = IInsertAtData | IInsertAtData[];

export interface INode {
  tag?: string;
  attrs?: {
    id?: string;
    class?: string;
  };
  content?: INode[];
}

interface ITree {
  match: (matcher: INode | INode[], node: (node: INode) => INode) => void;
}

export interface IInsertAtData {
  selector: string;
  behavior?: 'inside' | 'outside';
  append?: string;
  prepend?: string;
}
