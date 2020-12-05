exports.glMatrixExt = require("./glMatrixExt");

exports.geometry = require("./geometry");

Object.defineProperty(exports, "cuid", {
  get() {
    const cuid = require("cuid");
    Object.defineProperty(exports, "cuid", { value: cuid });
    return cuid;
  },
});

Object.defineProperty(exports, "now", {
  get() {
    const now = require("performance-now");
    Object.defineProperty(exports, "now", { value: now });
    patchNow(now);
    return now;
  },
});

const defineRafGetter = (function () {
  var module;
  return function getter(name) {
    Object.defineProperty(exports, name, {
      get() {
        module = module || require("raf");
        patchNow(exports.now);
        const value = module[name];
        Object.defineProperty(exports, name, { value });
        return value;
      },
    });
  };
})();

defineRafGetter("raf");
defineRafGetter("caf");

function patchNow(now) {
  (global.performance = global.performance || {}).now = now;
}
