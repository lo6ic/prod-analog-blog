import { ɵ as ɵɵdefineComponent, a as ɵɵStandaloneFeature, e as ɵɵelement, f as RouterOutlet } from "../main.server.mjs";
import "zone.js/node";
import "rxjs";
import "rxjs/operators";
import "url";
import "front-matter";
import "marked-gfm-heading-id";
import "marked";
import "marked-highlight";
import "prismjs";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-css.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "@hakimio/ngx-google-analytics";
let BlogPage = /* @__PURE__ */ (() => {
  var _class;
  class BlogPage2 {
  }
  _class = BlogPage2;
  _class.ɵfac = function BlogPage_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 1,
    vars: 0,
    template: function BlogPage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
  return BlogPage2;
})();
export {
  BlogPage as default
};
