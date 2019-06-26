import parser from 'posthtml-parser';
import { IInsertAtData, INode } from '.';

function insertNode({
  node,
  option,
  content
}: {
  node: INode;
  option: IInsertAtData;
  content: INode[];
}) {
  if (option.append) {
    content = [...content, parser(option.append)];
  }

  if (option.prepend) {
    content = [parser(option.prepend), ...content];
  }

  return {
    ...node,
    content
  };
}

export { insertNode };
