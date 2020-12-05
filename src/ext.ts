export function clamp(x: number, min: number, max: number) {
  return Math.min(max, Math.max(min, x));
}

export function clamp01(x: number) {
  return clamp(x, 0, 1);
}

export const saturate = clamp01;

export function clampAB(x: any, a: number, b: number) {
  return clamp(x, Math.min(a, b), Math.max(a, b));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const radian = 180 / Math.PI;

/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
export function toDegrees(angle: number) {
  return angle * radian;
}

export function patchMathHypot(previous = false) {
  if (Math.hypot.toString().indexOf("native") < 0) {
    Math.hypot = (function () {
      function h0() {
        return 0;
      }

      function h1(x: number) {
        return Math.abs(x);
      }

      function h2(a: number, b: number) {
        return Math.sqrt(a * a + b * b);
      }

      function h3(a: number, b: number, c: number) {
        return Math.sqrt(a * a + b * b + c * c);
      }

      function h4(a: number, b: number, c: number, d: number) {
        return Math.sqrt(a * a + b * b + c * c + d * d);
      }

      function hx() {
        var y = 0;
        var a = 0;
        var i = arguments.length;
        while (i--) y += (a = arguments[i]) * a;
        return Math.sqrt(y);
      }

      const h = (previous ? Math.hypot : undefined) || hx;

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
            // @ts-ignore
            return h.apply(null, arguments);
        }
      };
    })();
  }
}
