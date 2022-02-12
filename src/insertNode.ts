import { parser } from "posthtml-parser";
import type PostHTML from "posthtml";
import type { IInsertAtData } from "./insertAt";

interface IInsertNodeParams {
  node: PostHTML.Node;
  option: IInsertAtData;
  content: Array<PostHTML.Node["content"]>;
}

export function insertNode({ node, option }: IInsertNodeParams) {
  const content = node.content || [];

  if (option.append) {
    content.push(parser(option.append) as unknown as PostHTML.Node);
  }

  if (option.prepend) {
    content.unshift(parser(option.prepend) as unknown as PostHTML.Node);
  }

  return { ...node, content };
}
