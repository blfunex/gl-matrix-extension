import { vec4, vec2, ReadonlyVec2 } from "gl-matrix";

// prettier-ignore
export type rect =
  | [
      x: number, y: number,
      w: number, h: number
    ]
  | Float32Array;

// prettier-ignore
export type ReadonlyRect =
  | readonly [
      x: number, y: number,
      w: number, h: number
    ]
  | Float32Array;

// prettier-ignore
export type ReadonlyBox2 =
  | readonly [
      minX: number, minY: number,
      maxX: number, maxY: number
    ]
  | Float32Array;

export namespace rect {
  export const create: () => rect = vec4.create;

  export const fromValues: (
    x: number,
    y: number,
    w: number,
    h: number
  ) => rect = vec4.fromValues;

  export const clone: (rect: ReadonlyRect) => rect = vec4.clone;

  export const set: (
    out: rect,
    x: number,
    y: number,
    w: number,
    h: number
  ) => rect = vec4.set;

  export const copy: (out: rect, rect: ReadonlyRect) => rect = vec4.copy;

  export const equals: (a: ReadonlyRect, b: ReadonlyRect) => boolean =
    vec4.equals;

  export const exactEquals: (a: ReadonlyRect, b: ReadonlyRect) => boolean =
    vec4.exactEquals;

  export function getTopLeft(out: vec2, rect: ReadonlyRect) {
    // @ts-ignore
    vec2.copy(out, rect);
    return out;
  }

  export function getTopRight(out: vec2, rect: ReadonlyRect) {
    vec2.set(out, rect[0] + rect[2], rect[1]);
    return out;
  }

  export function getBottomLeft(out: vec2, rect: ReadonlyRect) {
    vec2.set(out, rect[0], rect[1] + rect[2]);
    return out;
  }

  export function getBottomRight(out: vec2, rect: ReadonlyRect) {
    vec2.set(out, rect[0] + rect[2], rect[1] - rect[2]);
    return out;
  }

  export function fromVectors(
    out: rect,
    coords: ReadonlyVec2,
    size: ReadonlyVec2
  ) {
    // @ts-ignore
    vec2.copy(out, coords);
    out[2] = size[0];
    out[3] = size[1];
    return out;
  }

  export function fromBox(out: rect, box: ReadonlyBox2) {
    // @ts-ignore
    var left = box[0];
    var top = box[1];
    out[0] = left;
    out[1] = top;
    out[2] = box[2] - top;
    out[3] = box[3] - left;
    return out;
  }

  export function normalize(out: rect, rect: ReadonlyRect) {
    // @ts-ignore
    vec2.copy(out, rect);
    out[2] = Math.abs(rect[2]);
    out[3] = Math.abs(rect[3]);
    return out;
  }

  export function getCenter(out: vec2, rect: ReadonlyRect) {
    return vec2.set(out, rect[0] + rect[2] * 0.5, rect[1] + rect[3] * 0.5);
  }

  export function getLeft(rect: ReadonlyRect) {
    return rect[0];
  }

  export function getTop(rect: ReadonlyRect) {
    return rect[1];
  }

  export function getRight(rect: ReadonlyRect) {
    return rect[0] + rect[2];
  }

  export function getBottom(rect: ReadonlyRect) {
    return rect[1] + rect[3];
  }

  export function setLeft(rect: rect, value: number) {
    rect[0] = value;
    return rect;
  }

  export function setTop(rect: rect, value: number) {
    rect[1] = value;
    return rect;
  }

  export function setRight(rect: rect, value: number) {
    rect[0] = value - rect[2];
    return rect;
  }

  export function setBottom(rect: rect, value: number) {
    rect[1] = value - rect[3];
    return rect;
  }

  export function contains(rect: ReadonlyRect, point: ReadonlyVec2) {
    const left = rect[0];
    const top = rect[1];
    const x = point[0];
    const y = point[1];
    return (
      left <= x && x <= left + rect[2] && top <= y && y <= top + rect[3]
    );
  }
}
