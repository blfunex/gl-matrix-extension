"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sphere = void 0;
var gl_matrix_1 = require("gl-matrix");
var sphere;
(function (sphere_1) {
    sphere_1.set = gl_matrix_1.vec4.set;
    sphere_1.create = gl_matrix_1.vec4.create;
    sphere_1.equals = gl_matrix_1.vec4.equals;
    sphere_1.fromValues = gl_matrix_1.vec4.fromValues;
    sphere_1.exactEquals = gl_matrix_1.vec4.exactEquals;
    sphere_1.clone = gl_matrix_1.vec4.clone;
    sphere_1.copy = gl_matrix_1.vec4.copy;
    // @ts-ignore
    sphere_1.getCoords = gl_matrix_1.vec3.copy;
    // @ts-ignore
    sphere_1.setCoords = gl_matrix_1.vec3.copy;
    // @ts-ignore
    sphere_1.setCoordsValues = gl_matrix_1.vec3.set;
    function fromVectors(out, coords, radius) {
        // @ts-ignore
        gl_matrix_1.vec3.copy(out, coords);
        out[3] = radius;
        return out;
    }
    sphere_1.fromVectors = fromVectors;
    function getRadius(sphere) {
        return sphere[3];
    }
    sphere_1.getRadius = getRadius;
    function setRadius(out, radius) {
        out[3] = radius;
        return out;
    }
    sphere_1.setRadius = setRadius;
    function contains(sphere, point) {
        var sqRadius = Math.pow(sphere[3], 2);
        // @ts-ignore
        return gl_matrix_1.vec3.squaredDistance(sphere, point) <= sqRadius;
    }
    sphere_1.contains = contains;
})(sphere = exports.sphere || (exports.sphere = {}));
