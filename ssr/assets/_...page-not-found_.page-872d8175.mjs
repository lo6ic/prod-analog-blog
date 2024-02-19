import { ɵ as ɵɵdefineComponent, a as ɵɵStandaloneFeature, b as ɵɵelementStart, c as ɵɵtext, d as ɵɵelementEnd, R as RouterLink } from "../main.server.mjs";
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
  _class.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 4,
    vars: 0,
    consts: [["routerLink", "/blog", 1, "btn", "btn-accent"]],
    template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "h2");
        ɵɵtext(1, "Page Not Found");
        ɵɵelementEnd();
        ɵɵelementStart(2, "a", 0);
        ɵɵtext(3, "Back to Blog");
        ɵɵelementEnd();
      }
    },
    dependencies: [RouterLink],
    encapsulation: 2
  });
  return PageNotFoundComponent2;
})();
export {
  PageNotFoundComponent as default,
  routeMeta
};
