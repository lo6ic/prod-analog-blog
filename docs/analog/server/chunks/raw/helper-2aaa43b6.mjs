class Helper {
  constructor() {
  }
  formatDate(date) {
    let myDate = Date.parse(date);
    return new Date(myDate).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
}

export { Helper as H };
//# sourceMappingURL=helper-2aaa43b6.mjs.map
