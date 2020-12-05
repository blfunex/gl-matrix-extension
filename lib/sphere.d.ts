import { vec3, ReadonlyVec3 } from "gl-matrix";
export declare type sphere = [x: number, y: number, z: number, radius: number] | Float32Array;
export declare type ReadonlySphere = readonly [x: number, y: number, z: number, radius: number] | Float32Array;
export declare namespace sphere {
    const set: (out: sphere, x: number, y: number, z: number, radius: number) => sphere;
    const create: () => sphere;
    const equals: (a: ReadonlySphere, b: ReadonlySphere) => boolean;
    const fromValues: (x: number, y: number, z: number, radius: number) => sphere;
    const exactEquals: (a: ReadonlySphere, b: ReadonlySphere) => boolean;
    const clone: (sphere: ReadonlySphere) => sphere;
    const copy: (out: sphere, sphere: ReadonlySphere) => sphere;
    const getCoords: (out: vec3, sphere: ReadonlySphere) => vec3;
    const setCoords: (out: sphere, coords: ReadonlyVec3) => sphere;
    const setCoordsValues: (out: sphere, x: number, y: number, z: number) => sphere;
    function fromVectors(out: sphere, coords: ReadonlyVec3, radius: number): sphere;
    function getRadius(sphere: sphere): number;
    function setRadius(out: sphere, radius: number): sphere;
    function contains(sphere: ReadonlySphere, point: ReadonlyVec3): boolean;
}
