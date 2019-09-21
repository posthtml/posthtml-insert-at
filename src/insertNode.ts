import { PostHTML } from 'posthtml';
import parser from 'posthtml-parser';
import { IInsertAtData } from './insertAt';

function insertNode({ node, option, content }: IInsertNodeParams) {
  if (content[0]) {
    if (option.append && node.content) {
      node.content.push(parser(option.append));
    }

    if (option.prepend && node.content) {
      node.content.unshift(parser(option.prepend));
    }
  }

  return node;
}

interface IInsertNodeParams {
  node: PostHTML.Node;
  option: IInsertAtData;
  content: [undefined | PostHTML.RawNode[] | unknown];
}

export { insertNode };
