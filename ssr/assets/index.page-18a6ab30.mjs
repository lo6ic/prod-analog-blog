import { g as ɵɵdirectiveInject, ɵ as ɵɵdefineComponent, t as injectContentFiles, T as Title, L as LOCALE_ID, j as ɵɵProvidersFeature, a as ɵɵStandaloneFeature, b as ɵɵelementStart, k as ɵɵtemplate, d as ɵɵelementEnd, m as ɵɵadvance, n as ɵɵproperty, u as NgForOf, R as RouterLink, e as ɵɵelement, c as ɵɵtext, r as ɵɵnextContext, v as ɵɵpropertyInterpolate, s as ɵɵtextInterpolate1, w as ɵɵtextInterpolate, x as ɵɵpureFunction1, y as ɵɵsanitizeUrl } from "../main.server.mjs";
import { H as Helper } from "./helper-2aaa43b6.mjs";
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
const _c0 = function(a1) {
  return ["/blog", a1];
};
function IndexPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 2)(2, "figure");
    ɵɵelement(3, "img", 3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4)(5, "h2", 5);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtext(7);
    ɵɵelementStart(8, "p");
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 6)(11, "a", 7);
    ɵɵtext(12, "Read it now!");
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("src", post_r1.attributes.coverImage, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", post_r1.attributes.title, " ");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.helper.formatDate(post_r1.attributes.created), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(post_r1.attributes.description);
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpureFunction1(5, _c0, post_r1.slug));
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
    return new (t || _class)(ɵɵdirectiveInject(Title), ɵɵdirectiveInject(Helper), ɵɵdirectiveInject(LOCALE_ID));
  };
  _class.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [ɵɵProvidersFeature([Helper]), ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "grid", "grid-cols-4", "gap-4"], [4, "ngFor", "ngForOf"], [1, "card", "card-compact", "w-96", "bg-base-100", "shadow-xl"], ["width", "400", "alt", "Shoes", 3, "src"], [1, "card-body"], [1, "card-title", 2, "margin-top", "-30px"], [1, "card-actions"], [1, "btn", "btn-accent", 3, "routerLink"]],
    template: function IndexPage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, IndexPage_div_1_Template, 13, 7, "div", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.posts);
      }
    },
    dependencies: [NgForOf, RouterLink],
    encapsulation: 2
  });
  return IndexPage2;
})();
export {
  IndexPage as default
};
