declare module "posthtml-match-helper" {
  interface Matcher {
    tag?: string;
    attrs: {
      id?: string;
      class?: RegExp;
      [attr: string]: any;
    };
  }

  export default function createMatcher(
    matcher: string | string[]
  ): Matcher | Matcher[];
}
