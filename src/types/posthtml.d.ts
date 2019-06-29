declare module 'posthtml' {
  export interface INode {
    tag?: string;
    attrs?: {
      id?: string;
      class?: string;
    };
    content?: INode[];
  }

  export interface ITree {
    match: (matcher: INode | INode[], node: (node: INode) => INode) => void;
  }

  export default function(): any;
}
