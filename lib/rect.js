"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rect = void 0;
var gl_matrix_1 = require("gl-matrix");
var rect;
(function (rect_1) {
    rect_1.create = gl_matrix_1.vec4.create;
    rect_1.fromValues = gl_matrix_1.vec4.fromValues;
    rect_1.clone = gl_matrix_1.vec4.clone;
    rect_1.set = gl_matrix_1.vec4.set;
    rect_1.copy = gl_matrix_1.vec4.copy;
    rect_1.equals = gl_matrix_1.vec4.equals;
    rect_1.exactEquals = gl_matrix_1.vec4.exactEquals;
    function getTopLeft(out, rect) {
        // @ts-ignore
        gl_matrix_1.vec2.copy(out, rect);
        return out;
    }
    rect_1.getTopLeft = getTopLeft;
    function getTopRight(out, rect) {
        gl_matrix_1.vec2.set(out, rect[0] + rect[2], rect[1]);
        return out;
    }
    rect_1.getTopRight = getTopRight;
    function getBottomLeft(out, rect) {
        gl_matrix_1.vec2.set(out, rect[0], rect[1] + rect[2]);
        return out;
    }
    rect_1.getBottomLeft = getBottomLeft;
    function getBottomRight(out, rect) {
        gl_matrix_1.vec2.set(out, rect[0] + rect[2], rect[1] - rect[2]);
        return out;
    }
    rect_1.getBottomRight = getBottomRight;
    function fromVectors(out, coords, size) {
        // @ts-ignore
        gl_matrix_1.vec2.copy(out, coords);
        out[2] = size[0];
        out[3] = size[1];
        return out;
    }
    rect_1.fromVectors = fromVectors;
    function fromBox(out, box) {
        // @ts-ignore
        var left = box[0];
        var top = box[1];
        out[0] = left;
        out[1] = top;
        out[2] = box[2] - top;
        out[3] = box[3] - left;
        return out;
    }
    rect_1.fromBox = fromBox;
    function normalize(out, rect) {
        // @ts-ignore
        gl_matrix_1.vec2.copy(out, rect);
        out[2] = Math.abs(rect[2]);
        out[3] = Math.abs(rect[3]);
        return out;
    }
    rect_1.normalize = normalize;
    function getCenter(out, rect) {
        return gl_matrix_1.vec2.set(out, rect[0] + rect[2] * 0.5, rect[1] + rect[3] * 0.5);
    }
    rect_1.getCenter = getCenter;
    function getLeft(rect) {
        return rect[0];
    }
    rect_1.getLeft = getLeft;
    function getTop(rect) {
        return rect[1];
    }
    rect_1.getTop = getTop;
    function getRight(rect) {
        return rect[0] + rect[2];
    }
    rect_1.getRight = getRight;
    function getBottom(rect) {
        return rect[1] + rect[3];
    }
    rect_1.getBottom = getBottom;
    function setLeft(rect, value) {
        rect[0] = value;
        return rect;
    }
    rect_1.setLeft = setLeft;
    function setTop(rect, value) {
        rect[1] = value;
        return rect;
    }
    rect_1.setTop = setTop;
    function setRight(rect, value) {
        rect[0] = value - rect[2];
        return rect;
    }
    rect_1.setRight = setRight;
    function setBottom(rect, value) {
        rect[1] = value - rect[3];
        return rect;
    }
    rect_1.setBottom = setBottom;
    function contains(rect, point) {
        var left = rect[0];
        var top = rect[1];
        var x = point[0];
        var y = point[1];
        return (left <= x && x <= left + rect[2] && top <= y && y <= top + rect[3]);
    }
    rect_1.contains = contains;
})(rect = exports.rect || (exports.rect = {}));
