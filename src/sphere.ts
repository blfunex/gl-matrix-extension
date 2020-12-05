import { vec4, vec3, ReadonlyVec3 } from "gl-matrix";

// prettier-ignore
export type sphere =
  | [x: number, y: number, z: number, radius: number]
  | Float32Array
  ;

// prettier-ignore
export type ReadonlySphere =
  | readonly [x: number, y: number, z: number, radius: number]
  | Float32Array;

export namespace sphere {
  export const set: (
    out: sphere,
    x: number,
    y: number,
    z: number,
    radius: number
  ) => sphere = vec4.set;

  export const create: () => sphere = vec4.create;

  export const equals: (a: ReadonlySphere, b: ReadonlySphere) => boolean =
    vec4.equals;

  export const fromValues: (
    x: number,
    y: number,
    z: number,
    radius: number
  ) => sphere = vec4.fromValues;

  export const exactEquals: (
    a: ReadonlySphere,
    b: ReadonlySphere
  ) => boolean = vec4.exactEquals;

  export const clone: (sphere: ReadonlySphere) => sphere = vec4.clone;

  export const copy: (out: sphere, sphere: ReadonlySphere) => sphere =
    vec4.copy;

  // @ts-ignore
  export const getCoords: (out: vec3, sphere: ReadonlySphere) => vec3 =
    vec3.copy;

  // @ts-ignore
  export const setCoords: (out: sphere, coords: ReadonlyVec3) => sphere =
    vec3.copy;

  // @ts-ignore
  export const setCoordsValues: (
    out: sphere,
    x: number,
    y: number,
    z: number
  ) => sphere = vec3.set;

  export function fromVectors(
    out: sphere,
    coords: ReadonlyVec3,
    radius: number
  ) {
    // @ts-ignore
    vec3.copy(out, coords);
    out[3] = radius;
    return out;
  }

  export function getRadius(sphere: sphere) {
    return sphere[3];
  }

  export function setRadius(out: sphere, radius: number) {
    out[3] = radius;
    return out;
  }

  export function contains(sphere: ReadonlySphere, point: ReadonlyVec3) {
    const sqRadius = sphere[3] ** 2;
    // @ts-ignore
    return vec3.squaredDistance(sphere, point) <= sqRadius;
  }
}
