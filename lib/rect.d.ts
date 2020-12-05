import { vec2, ReadonlyVec2 } from "gl-matrix";
export declare type rect = [
    x: number,
    y: number,
    w: number,
    h: number
] | Float32Array;
export declare type ReadonlyRect = readonly [
    x: number,
    y: number,
    w: number,
    h: number
] | Float32Array;
export declare type ReadonlyBox2 = readonly [
    minX: number,
    minY: number,
    maxX: number,
    maxY: number
] | Float32Array;
export declare namespace rect {
    const create: () => rect;
    const fromValues: (x: number, y: number, w: number, h: number) => rect;
    const clone: (rect: ReadonlyRect) => rect;
    const set: (out: rect, x: number, y: number, w: number, h: number) => rect;
    const copy: (out: rect, rect: ReadonlyRect) => rect;
    const equals: (a: ReadonlyRect, b: ReadonlyRect) => boolean;
    const exactEquals: (a: ReadonlyRect, b: ReadonlyRect) => boolean;
    function getTopLeft(out: vec2, rect: ReadonlyRect): vec2;
    function getTopRight(out: vec2, rect: ReadonlyRect): vec2;
    function getBottomLeft(out: vec2, rect: ReadonlyRect): vec2;
    function getBottomRight(out: vec2, rect: ReadonlyRect): vec2;
    function fromVectors(out: rect, coords: ReadonlyVec2, size: ReadonlyVec2): rect;
    function fromBox(out: rect, box: ReadonlyBox2): rect;
    function normalize(out: rect, rect: ReadonlyRect): rect;
    function getCenter(out: vec2, rect: ReadonlyRect): vec2;
    function getLeft(rect: ReadonlyRect): number;
    function getTop(rect: ReadonlyRect): number;
    function getRight(rect: ReadonlyRect): number;
    function getBottom(rect: ReadonlyRect): number;
    function setLeft(rect: rect, value: number): rect;
    function setTop(rect: rect, value: number): rect;
    function setRight(rect: rect, value: number): rect;
    function setBottom(rect: rect, value: number): rect;
    function contains(rect: ReadonlyRect, point: ReadonlyVec2): boolean;
}
