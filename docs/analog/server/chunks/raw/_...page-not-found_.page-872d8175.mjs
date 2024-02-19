import { ɵ as __defineComponent, a as __StandaloneFeature, b as __elementStart, c as __text, d as __elementEnd, R as RouterLink } from '../renderer.mjs';
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

const routeMeta = {
  title: "Page Not Found"
};
let PageNotFoundComponent = /* @__PURE__ */ (() => {
  var _class;
  class PageNotFoundComponent2 {
  }
  _class = PageNotFoundComponent2;
  _class.ɵfac = function PageNotFoundComponent_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__StandaloneFeature],
    decls: 4,
    vars: 0,
    consts: [["routerLink", "/blog", 1, "btn", "btn-accent"]],
    template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "h2");
        __text(1, "Page Not Found");
        __elementEnd();
        __elementStart(2, "a", 0);
        __text(3, "Back to Blog");
        __elementEnd();
      }
    },
    dependencies: [RouterLink],
    encapsulation: 2
  });
  return PageNotFoundComponent2;
})();

export { PageNotFoundComponent as default, routeMeta };
//# sourceMappingURL=_...page-not-found_.page-872d8175.mjs.map
