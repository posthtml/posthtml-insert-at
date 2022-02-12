import createMatcher from "posthtml-match-helper";
import { insertNode } from "./insertNode";
import type PostHTML from "posthtml";

type Options = IInsertAtData | IInsertAtData[];

export interface IInsertAtData {
  selector: string;
  behavior?: "inside" | "outside";
  append?: string;
  prepend?: string;
}

export function insertAt(options: Options) {
  return function plugin(tree: PostHTML.Node) {
    const opts = Array.isArray(options) ? options : [options];

    opts.forEach((option) => {
      const matcher = createMatcher(option.selector);
      const behavior = option.behavior || "inside";

      if (behavior === "inside") {
        tree.match(matcher, (node) =>
          insertNode({ node, option, content: [node.content] })
        );
      } else {
        let siblingNode = {};

        tree.match(matcher, (node) => {
          siblingNode = node;
          return node;
        });

        const matchingNode = siblingNode as PostHTML.Node["content"];

        tree.match({ content: [matcher] }, (node) =>
          insertNode({ node, option, content: [matchingNode] })
        );
      }
    });
  };
}
