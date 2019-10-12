import { PostHTML } from 'posthtml';
import parser from 'posthtml-parser';
import { IInsertAtData } from './insertAt';

function insertNode({ node, option }: IInsertNodeParams) {
  const content = node.content || [];

  if (option.append) {
    content.push(parser(option.append));
  }

  if (option.prepend) {
    content.unshift(parser(option.prepend));
  }

  return { ...node, content };
}

interface IInsertNodeParams {
  node: PostHTML.Node;
  option: IInsertAtData;
  content: [undefined | PostHTML.RawNode[] | unknown];
}

export { insertNode };
