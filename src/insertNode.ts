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
    if (option.append) {
      content = [...content, parser(option.append)] as any;
    }

    if (option.prepend) {
      content = [parser(option.prepend), ...content] as any;
    }

    return {
      ...node,
      content
    };
  }

  return node;
}

export { insertNode };
