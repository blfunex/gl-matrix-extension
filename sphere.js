const { vec4, vec3 } = require("gl-matrix");

const sphere = module.exports;

sphere.set = vec4.set;
sphere.create = vec4.create;
sphere.equals = vec4.equals;
sphere.fromValues = vec4.fromValues;
sphere.exactEquals = vec4.exactEquals;
sphere.clone = vec4.clone;
sphere.copy = vec4.copy;
sphere.getCoords = vec3.copy;
sphere.setCoords = vec3.copy;
sphere.setCoordsValues = vec3.set;

sphere.fromVectors = function fromVectors(out, coords, radius) {
  vec3.copy(out, coords);
  out[3] = radius;
  return out;
};

sphere.getRadius = function getRadius(sphere) {
  return sphere[3];
};

sphere.setRadius = function getRadius(out, radius) {
  out[3] = radius;
  return out;
};

sphere.contains = function contains(sphere, point) {
  const sqRadius = sphere[3] ** 2;
  return vec3.squaredDistance(sphere, point) <= sqRadius;
};
