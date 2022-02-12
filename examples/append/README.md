# examples/append

> Example that appends markup outside of a selector.

The [`src/index.js`](src/index.js) file runs the [`posthtml-insert-at` plugin](../../) on [`src/index.html`](src/index.html). The post-processed output is [`src/after.html`](src/after.html).

This example illustrates the ability to append markup to a selector using the "outside" behavior.

## Running Locally

Run the following:

```bash
yarn install
yarn posthtml
```

The processed file should be written to src/after.html.
