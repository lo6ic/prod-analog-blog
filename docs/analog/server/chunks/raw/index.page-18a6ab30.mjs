import { g as __directiveInject, ɵ as __defineComponent, t as injectContentFiles, T as Title, L as LOCALE_ID, j as __ProvidersFeature, a as __StandaloneFeature, b as __elementStart, k as __template, d as __elementEnd, m as __advance, n as __property, u as NgForOf, R as RouterLink, e as __element, c as __text, r as __nextContext, v as __propertyInterpolate, s as __textInterpolate1, w as __textInterpolate, x as __pureFunction1, y as __sanitizeUrl } from '../renderer.mjs';
import { H as Helper } from './helper-2aaa43b6.mjs';
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

const _c0 = function(a1) {
  return ["/blog", a1];
};
function IndexPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div")(1, "div", 2)(2, "figure");
    __element(3, "img", 3);
    __elementEnd();
    __elementStart(4, "div", 4)(5, "h2", 5);
    __text(6);
    __elementEnd();
    __text(7);
    __elementStart(8, "p");
    __text(9);
    __elementEnd();
    __elementStart(10, "div", 6)(11, "a", 7);
    __text(12, "Read it now!");
    __elementEnd()()()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = __nextContext();
    __advance(3);
    __propertyInterpolate("src", post_r1.attributes.coverImage, __sanitizeUrl);
    __advance(3);
    __textInterpolate1(" ", post_r1.attributes.title, " ");
    __advance(1);
    __textInterpolate1(" ", ctx_r0.helper.formatDate(post_r1.attributes.created), " ");
    __advance(2);
    __textInterpolate(post_r1.attributes.description);
    __advance(2);
    __property("routerLink", __pureFunction1(5, _c0, post_r1.slug));
  }
}
let IndexPage = /* @__PURE__ */ (() => {
  var _class;
  class IndexPage2 {
    constructor(titleService, helper, locale) {
      this.titleService = titleService;
      this.helper = helper;
      this.locale = locale;
      this.title = "Blog";
      this.posts = injectContentFiles();
    }
    ngOnInit() {
      this.titleService.setTitle(this.title);
    }
  }
  _class = IndexPage2;
  _class.ɵfac = function IndexPage_Factory(t) {
    return new (t || _class)(__directiveInject(Title), __directiveInject(Helper), __directiveInject(LOCALE_ID));
  };
  _class.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__ProvidersFeature([Helper]), __StandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "grid", "grid-cols-4", "gap-4"], [4, "ngFor", "ngForOf"], [1, "card", "card-compact", "w-96", "bg-base-100", "shadow-xl"], ["width", "400", "alt", "Shoes", 3, "src"], [1, "card-body"], [1, "card-title", 2, "margin-top", "-30px"], [1, "card-actions"], [1, "btn", "btn-accent", 3, "routerLink"]],
    template: function IndexPage_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "div", 0);
        __template(1, IndexPage_div_1_Template, 13, 7, "div", 1);
        __elementEnd();
      }
      if (rf & 2) {
        __advance(1);
        __property("ngForOf", ctx.posts);
      }
    },
    dependencies: [NgForOf, RouterLink],
    encapsulation: 2
  });
  return IndexPage2;
})();

export { IndexPage as default };
//# sourceMappingURL=index.page-18a6ab30.mjs.map
