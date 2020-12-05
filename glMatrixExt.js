const glMatrixExt = module.exports;

glMatrixExt.clamp = function clamp(x, min, max) {
  return Math.min(max, Math.max(min, x));
};

glMatrixExt.clamp01 = function clamp01(x) {
  return glMatrixExt.clamp(x, 0, 1);
};

glMatrixExt.saturate = glMatrixExt.clamp01;

glMatrixExt.clampAB = function clampAB(x, a, b) {
  return glMatrixExt.clamp(x, Math.min(a, b), Math.max(a, b));
};

glMatrixExt.lerp = function lerp(a, b, t) {
  return a + (b - a) * t;
};

const radian = 180 / Math.PI;

/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
glMatrixExt.toDegrees = function toDegrees(angle) {
  return angle * radian;
};

glMatrixExt.patchMathHypot = function patchMathHypot(previous = false) {
  if (Math.hypot.toString().indexOf("native") < 0) {
    Math.hypot = (function () {
      function h0() {
        return 0;
      }

      function h1(x) {
        return Math.abs(x);
      }

      function h2(a, b) {
        return Math.sqrt(a * a, b * b);
      }

      function h3(a, b, c) {
        return Math.sqrt(a * a, b * b, c * c);
      }

      function h4(a, b, c, d) {
        return Math.sqrt(a * a, b * b, c * c, d * d);
      }

      const h =
        (previous ? Math.hypot : undefined) ||
        function h(args) {
          var y = 0;
          var a = 0;
          var i = args.length;
          while (i--) y += (a = arguments[i]) * a;
          return Math.sqrt(y);
        };

      return function hypot() {
        switch (arguments.length) {
          case 0:
            return h0();
          case 1:
            return h1(arguments[0]);
          case 2:
            return h2(arguments[0], arguments[1]);
          case 3:
            return h3(arguments[0], arguments[1], arguments[2]);
          case 4:
            return h4(
              arguments[0],
              arguments[1],
              arguments[2],
              arguments[3]
            );
          default:
            return h(arguments);
        }
      };
    })();
  }
};
