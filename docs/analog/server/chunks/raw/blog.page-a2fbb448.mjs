import { ɵ as __defineComponent, a as __StandaloneFeature, e as __element, f as RouterOutlet } from '../renderer.mjs';
import 'zone.js/node';
import '../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'rxjs';
import 'rxjs/operators';
import 'url';
import 'front-matter';
import 'marked-gfm-heading-id';
import 'marked';
import 'marked-highlight';
import '@hakimio/ngx-google-analytics';
import './index.mjs';

let BlogPage = /* @__PURE__ */ (() => {
  var _class;
  class BlogPage2 {
  }
  _class = BlogPage2;
  _class.ɵfac = function BlogPage_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 1,
    vars: 0,
    template: function BlogPage_Template(rf, ctx) {
      if (rf & 1) {
        __element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
  return BlogPage2;
})();

export { BlogPage as default };
//# sourceMappingURL=blog.page-a2fbb448.mjs.map
