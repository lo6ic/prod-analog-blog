import { g as __directiveInject, ɵ as __defineComponent, i as injectContent, T as Title, A as ActivatedRoute, h as TitleCasePipe, L as LOCALE_ID, j as __ProvidersFeature, a as __StandaloneFeature, b as __elementStart, k as __template, l as __pipe, d as __elementEnd, m as __advance, n as __property, o as __pipeBind1, p as AnalogMarkdownComponent, N as NgIf, q as AsyncPipe, R as RouterLink, c as __text, e as __element, r as __nextContext, s as __textInterpolate1 } from '../renderer.mjs';
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

function BlogPostPage_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div");
    __text(1);
    __elementEnd();
  }
  if (rf & 2) {
    const post_r1 = __nextContext().ngIf;
    const ctx_r2 = __nextContext();
    __advance(1);
    __textInterpolate1(" Last Updated: ", ctx_r2.helper.formatDate(post_r1.attributes.updated), " ");
  }
}
function BlogPostPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div")(1, "h1", 2);
    __text(2);
    __elementEnd();
    __elementStart(3, "div");
    __text(4);
    __elementEnd();
    __template(5, BlogPostPage_div_1_div_5_Template, 2, 1, "div", 1);
    __elementStart(6, "div", 3);
    __element(7, "analog-markdown", 4);
    __elementEnd();
    __elementStart(8, "a", 5);
    __text(9, "Back to Blog");
    __elementEnd()();
  }
  if (rf & 2) {
    const post_r1 = ctx.ngIf;
    const ctx_r0 = __nextContext();
    __advance(2);
    __textInterpolate1(" ", post_r1.attributes.title, " ");
    __advance(2);
    __textInterpolate1("Created: ", ctx_r0.helper.formatDate(post_r1.attributes.created), "");
    __advance(1);
    __property("ngIf", post_r1.attributes.updated);
    __advance(2);
    __property("content", post_r1.content);
  }
}
let BlogPostPage = /* @__PURE__ */ (() => {
  var _class;
  class BlogPostPage2 {
    constructor(titleService, theRoute, tcPipe, helper, locale) {
      this.titleService = titleService;
      this.theRoute = theRoute;
      this.tcPipe = tcPipe;
      this.helper = helper;
      this.locale = locale;
      this.slug = "";
      this.post$ = injectContent();
      this.theRoute.params.subscribe((params) => {
        this.slug = params["slug"];
        this.titleService.setTitle(this.tcPipe.transform(this.transformBlogSlug(this.slug)));
      });
    }
    transformBlogSlug(theSlug) {
      let theSlugArray = theSlug.split("-");
      theSlugArray.splice(0, 3);
      let theTitle = theSlugArray.join(" ");
      return theTitle;
    }
    ngOnInit() {
      this.titleService.setTitle(this.titleService.getTitle());
    }
  }
  _class = BlogPostPage2;
  _class.ɵfac = function BlogPostPage_Factory(t) {
    return new (t || _class)(__directiveInject(Title), __directiveInject(ActivatedRoute), __directiveInject(TitleCasePipe), __directiveInject(Helper), __directiveInject(LOCALE_ID));
  };
  _class.ɵcmp = /* @__PURE__ */ __defineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [__ProvidersFeature([TitleCasePipe, Helper]), __StandaloneFeature],
    decls: 3,
    vars: 3,
    consts: [[1, "flex", "w-full", "flex-auto", "flex-col", "items-center", "gap-4", "overflow-auto"], [4, "ngIf"], [1, "text-3xl", "font-extrabold"], [1, "container", "w-full"], [1, "text-lg", 3, "content"], ["routerLink", "/blog", 1, "btn", "btn-accent"]],
    template: function BlogPostPage_Template(rf, ctx) {
      if (rf & 1) {
        __elementStart(0, "article", 0);
        __template(1, BlogPostPage_div_1_Template, 10, 4, "div", 1);
        __pipe(2, "async");
        __elementEnd();
      }
      if (rf & 2) {
        __advance(1);
        __property("ngIf", __pipeBind1(2, 1, ctx.post$));
      }
    },
    dependencies: [AnalogMarkdownComponent, NgIf, AsyncPipe, RouterLink],
    encapsulation: 2
  });
  return BlogPostPage2;
})();

export { BlogPostPage as default };
//# sourceMappingURL=_slug_.page-7137ff76.mjs.map
