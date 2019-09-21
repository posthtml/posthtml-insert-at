import { PostHTML } from 'posthtml';
import parser from 'posthtml-parser';
import { IInsertAtData } from './insertAt';

function insertNode({
  node,
  option,
  content
}: {
  node: PostHTML.Node;
  option: IInsertAtData;
  content: [undefined | PostHTML.RawNode[] | any];
}): PostHTML.Node {
  if (content[0]) {
    if (option.append && node.content) {
      node.content.push(parser(option.append));
      // content = [...content, parser(option.append)] as PostHTML.Node[];
    }

    if (option.prepend && node.content) {
      node.content.unshift(parser(option.prepend));
      // content = [parser(option.prepend), ...content] as PostHTML.Node[];
    }

    return node;
    /* 
    return {
      ...node,
      content
    }; */
  }

  return node;
}

export { insertNode };
