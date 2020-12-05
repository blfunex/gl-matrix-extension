"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMathHypot = exports.toDegrees = exports.lerp = exports.clampAB = exports.saturate = exports.clamp01 = exports.clamp = void 0;
function clamp(x, min, max) {
    return Math.min(max, Math.max(min, x));
}
exports.clamp = clamp;
function clamp01(x) {
    return clamp(x, 0, 1);
}
exports.clamp01 = clamp01;
exports.saturate = clamp01;
function clampAB(x, a, b) {
    return clamp(x, Math.min(a, b), Math.max(a, b));
}
exports.clampAB = clampAB;
function lerp(a, b, t) {
    return a + (b - a) * t;
}
exports.lerp = lerp;
var radian = 180 / Math.PI;
/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
function toDegrees(angle) {
    return angle * radian;
}
exports.toDegrees = toDegrees;
function patchMathHypot(previous) {
    if (previous === void 0) { previous = false; }
    if (Math.hypot.toString().indexOf("native") < 0) {
        Math.hypot = (function () {
            function h0() {
                return 0;
            }
            function h1(x) {
                return Math.abs(x);
            }
            function h2(a, b) {
                return Math.sqrt(a * a + b * b);
            }
            function h3(a, b, c) {
                return Math.sqrt(a * a + b * b + c * c);
            }
            function h4(a, b, c, d) {
                return Math.sqrt(a * a + b * b + c * c + d * d);
            }
            function hx() {
                var y = 0;
                var a = 0;
                var i = arguments.length;
                while (i--)
                    y += (a = arguments[i]) * a;
                return Math.sqrt(y);
            }
            var h = (previous ? Math.hypot : undefined) || hx;
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
                        return h4(arguments[0], arguments[1], arguments[2], arguments[3]);
                    default:
                        // @ts-ignore
                        return h.apply(null, arguments);
                }
            };
        })();
    }
}
exports.patchMathHypot = patchMathHypot;
