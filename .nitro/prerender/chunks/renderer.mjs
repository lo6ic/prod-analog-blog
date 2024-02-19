import { eventHandler } from 'file:///home/cschedler/website/analog-blog/node_modules/h3/dist/index.mjs';
import renderer$1 from 'file:///home/cschedler/website/analog-blog/dist/ssr/main.server.mjs';

// ROLLUP_NO_REPLACE 
 const template = "<!DOCTYPE html>\n<html lang=\"en\" id=\"oHTML\" data-theme=\"dark\">\n\n<head>\n  <meta charset=\"utf-8\" />\n  <title>MyApp</title>\n  <base href=\"/\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"/assets/favicon-ee899aff.ico\" />\n  \n  <script type=\"module\" crossorigin src=\"/assets/index-1ec44b7b.js\"></script>\n  <link rel=\"stylesheet\" href=\"/assets/index-f61f20c7.css\">\n</head>\n\n<body>\n  <app-root></app-root>\n  \n</body>\n\n</html>";

/**
 * This file is written in JavaScript
 * because it is used by Nitro to build
 * the renderer for SSR.
 *
 * The package is shipped as commonjs
 * which won't be parsed by Nitro correctly.
 */

const renderer = eventHandler(async (event) => {
  const html = await renderer$1(event.node.req.url, template, {
    req: event.node.req,
    res: event.node.res,
  });
  return html;
});

export { renderer as default };
//# sourceMappingURL=renderer.mjs.map
