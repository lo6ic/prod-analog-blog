import { g as ɵɵdirectiveInject, ɵ as ɵɵdefineComponent, i as injectContent, T as Title, A as ActivatedRoute, h as TitleCasePipe, L as LOCALE_ID, j as ɵɵProvidersFeature, a as ɵɵStandaloneFeature, b as ɵɵelementStart, k as ɵɵtemplate, l as ɵɵpipe, d as ɵɵelementEnd, m as ɵɵadvance, n as ɵɵproperty, o as ɵɵpipeBind1, p as AnalogMarkdownComponent, N as NgIf, q as AsyncPipe, R as RouterLink, c as ɵɵtext, e as ɵɵelement, r as ɵɵnextContext, s as ɵɵtextInterpolate1 } from "../main.server.mjs";
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
function BlogPostPage_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const post_r1 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Last Updated: ", ctx_r2.helper.formatDate(post_r1.attributes.updated), " ");
  }
}
function BlogPostPage_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "h1", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, BlogPostPage_div_1_div_5_Template, 2, 1, "div", 1);
    ɵɵelementStart(6, "div", 3);
    ɵɵelement(7, "analog-markdown", 4);
    ɵɵelementEnd();
    ɵɵelementStart(8, "a", 5);
    ɵɵtext(9, "Back to Blog");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const post_r1 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", post_r1.attributes.title, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Created: ", ctx_r0.helper.formatDate(post_r1.attributes.created), "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", post_r1.attributes.updated);
    ɵɵadvance(2);
    ɵɵproperty("content", post_r1.content);
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
    return new (t || _class)(ɵɵdirectiveInject(Title), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(TitleCasePipe), ɵɵdirectiveInject(Helper), ɵɵdirectiveInject(LOCALE_ID));
  };
  _class.ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
    type: _class,
    selectors: [["ng-component"]],
    standalone: true,
    features: [ɵɵProvidersFeature([TitleCasePipe, Helper]), ɵɵStandaloneFeature],
    decls: 3,
    vars: 3,
    consts: [[1, "flex", "w-full", "flex-auto", "flex-col", "items-center", "gap-4", "overflow-auto"], [4, "ngIf"], [1, "text-3xl", "font-extrabold"], [1, "container", "w-full"], [1, "text-lg", 3, "content"], ["routerLink", "/blog", 1, "btn", "btn-accent"]],
    template: function BlogPostPage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "article", 0);
        ɵɵtemplate(1, BlogPostPage_div_1_Template, 10, 4, "div", 1);
        ɵɵpipe(2, "async");
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.post$));
      }
    },
    dependencies: [AnalogMarkdownComponent, NgIf, AsyncPipe, RouterLink],
    encapsulation: 2
  });
  return BlogPostPage2;
})();
export {
  BlogPostPage as default
};
