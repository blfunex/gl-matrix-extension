const geometry = module.exports;

geometry.calculateNormal = (function () {
  const u = vec3.create();
  const v = vec3.create();

  return function calculateNormal(out, a, b, c) {
    vec3.sub(u, b, a);
    vec3.sub(v, c, a);
    vec3.cross(out, u, v);
    vec3.normalize(out, out);
    return out;
  };
})();
