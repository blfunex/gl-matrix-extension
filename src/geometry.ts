import { ReadonlyVec3, vec3 } from "gl-matrix";

export namespace geometry {
  export const calculateNormal = (function () {
    const u = vec3.create();
    const v = vec3.create();
    return function calculateNormal(
      out: vec3,
      a: ReadonlyVec3,
      b: ReadonlyVec3,
      c: ReadonlyVec3
    ) {
      vec3.sub(u, b, a);
      vec3.sub(v, c, a);
      vec3.cross(out, u, v);
      vec3.normalize(out, out);
      return out;
    };
  })();
}
