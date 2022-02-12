declare module "posthtml-match-helper" {
  function createMatcher(matcher: string | string[]): string[];
  export default createMatcher;
}
