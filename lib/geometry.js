"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geometry = void 0;
var gl_matrix_1 = require("gl-matrix");
var geometry;
(function (geometry) {
    geometry.calculateNormal = (function () {
        var u = gl_matrix_1.vec3.create();
        var v = gl_matrix_1.vec3.create();
        return function calculateNormal(out, a, b, c) {
            gl_matrix_1.vec3.sub(u, b, a);
            gl_matrix_1.vec3.sub(v, c, a);
            gl_matrix_1.vec3.cross(out, u, v);
            gl_matrix_1.vec3.normalize(out, out);
            return out;
        };
    })();
})(geometry = exports.geometry || (exports.geometry = {}));
