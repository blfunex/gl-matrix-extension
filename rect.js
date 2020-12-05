const { vec4, vec2 } = require("gl-matrix");

const rect = module.exports;

rect.set = vec4.set;
rect.copy = vec4.copy;
rect.clone = vec4.clone;
rect.create = vec4.create;
rect.equals = vec4.equals;
rect.fromValues = vec4.fromValues;
rect.exactEquals = vec4.exactEquals;

rect.getTopLeft = function getTopLeft(out, rect) {
  vec2.copy(out, rect);
  return out;
};

rect.getTopRight = function getTopRight(out, rect) {
  vec2.set(out, rect[0] + rect[2], rect[1]);
  return out;
};

rect.getBottomLeft = function getBottomLeft(out, rect) {
  vec2.set(out, rect[0], rect[1] - rect[2]);
  return out;
};

rect.getBottomRight = function getBottomRight(out, rect) {
  vec2.set(out, rect[0] + rect[2], rect[1] - rect[2]);
  return out;
};

rect.fromVectors = function fromVectors(out, coords, size) {
  vec2.copy(out, coords);
  out[2] = size[0];
  out[3] = size[1];
  return out;
};

rect.fromBox = function fromBox(out, box) {
  var left = box[0];
  var top = box[1];
  out[0] = left;
  out[1] = top;
  out[2] = box[2] - top;
  out[3] = box[3] - left;
  return out;
};

rect.normalize = function normalize(out, rect) {
  vec2.copy(out, rect);
  out[2] = Math.abs(rect[2]);
  out[3] = Math.abs(rect[3]);
  return out;
};

rect.getCenter = function getCenter(out, rect) {
  return vec2.set(out, rect[0] + rect[2] * 0.5, rect[1] + rect[3] * 0.5);
};

rect.getLeft = function getLeft(rect) {
  return rect[0];
};

rect.getTop = function getTop(rect) {
  return rect[1];
};

rect.getRight = function getRight(rect) {
  return rect[0] + rect[2];
};

rect.getBottom = function getBottom(rect) {
  return rect[1] + rect[3];
};

rect.setLeft = function setLeft(rect, value) {
  rect[0] = value;
  return rect;
};

rect.setTop = function setTop(rect, value) {
  rect[1] = value;
  return rect;
};

rect.setRight = function setRight(rect, value) {
  rect[0] = value - rect[2];
  return rect;
};

rect.setBottom = function setBottom(rect, value) {
  rect[1] = value - rect[3];
  return rect;
};

rect.contains = function contains(rect, point) {
  const left = rect[0];
  const top = rect[1];
  const x = point[0];
  const y = point[1];
  return (
    left <= x && x <= left + rect[2] && top <= y && y <= top + rect[3]
  );
};
