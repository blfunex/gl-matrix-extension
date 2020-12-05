# glMatrix Extension

A set of utilities for interactive web content creation, following `gl-matrix` idioms,
The feature set includes 2D rects, sphere utils, 3D volumes utils, and some math functions.
In addition we packed a id generation module and a polyfill for `performance.now()` and `requestionAnimationFrame()`

## Contribution

Here is some suggestions for contributions

1. Help with the documentation / docs generation.
2. Suggest or setup testing.
3. Discuss future development of the library.

## Developer guide & Naming convention

1. **Extending built-ins**: we create a new namespace with `Ext` as suffix,
   like for `vec2` it will be `vec2Ext`;
2. **New data structures**: we will use the same convention as `gl-matrix`,
   lowercase the name, if it can have dimension size we append it as
   suffix, (examples: `rect`, `aabb2`, `aabb3`, `orect`, `oaabb3`,
   `sphere`, `circle`, `octree`);
3. **Intersections**: in some situations the user might just need to know
   if two things intersect, in that case she should use the
   `intersect${Thing}` functions, and when they are ready to get more
   details she should call `intersection${Thing}`, the
   `getIntersection${Thing}` should not do any checking, it is assumed that
   the user already did the intersection test, and if the intersection
   fails, the result is undefined (I mean an undefined result not literal
   `undefined`). We might consider a
   `tryGetIntersection${Thing}(out, ...): boolean `, see #1
4. **Class vs `gl-matrix`-like structure**: we might use classes for more complex objects, like in a `Transform` class exposing a `position: vec3`, `quaternion: quat`, `euler: vec3`, and a `scale: vec3`, and a generated `transform: mat4` (#4), see #2
5. **ArrayBuffer views**: EcmaScript provides a way to have views into array buffers, it would be more efficient if some class data structures used this property when making their substructures like, in `frustum`'s 6 `planes` (#5), or `aabb3`'s `min` and `max` `vec3`s, see #2, and #3

## Features / Roadmap

- Misc
  - `cuid` a lazy loaded [`cuid`](http://npmjs.com/package/cuid) module.
  - `now` a lazy loaded [`performance.now()`](http://npmjs.com/package/performance-now) polyfill.
  - `raf` a lazy loaded [`requestAnimationFrame()`](http://npmjs.com/package/@essentials/raf) polyfill.
  - `caf` a lazy loaded [`cancelAnimationFrame()`](http://npmjs.com/package/@essentials/raf) polyfill.
- 2D Bounding Volumes
  - [ ] `vec2Ext`
  - [x] `rect` _(coords and size)_
    - [x] Basic
      - [x] `create(): rect`
      - [x] `fromValues(x: number, y: number, width: number, height: number): rect`
      - [x] `fromVectors(out: rect, coords: vec2, size: vec2): rect`
      - [x] `clone(rect: rect): rect`
      - [x] `copy(out: rect, rect: rect): rect`
      - [x] `set(out: rect, x: number, y: number, width: number, height: number): rect`
      - [x] `equals(a: rect, b: rect): rect`
      - [x] `exactEquals(a: rect, b: rect): rect`
      - [x] `contains(rect: rect, point: vec2): rect`
      - [x] `getCenter(out: vec2, rect: rect): vec2`
      - [x] `normalize(out: rect, rect: rect): rect`
      - [x] `fromBox(out: rect, aabb: box2): rect`
    - [x] Edges
      - [x] `getLeft(rect: rect): number`
      - [x] `getTop(rect: rect): number`
      - [x] `getRight(rect: rect): number`
      - [x] `getBottom(rect: rect): number`
      - [x] `setLeft(out: rect, value: number): rect`
      - [x] `setTop(out: rect, value: number): rect`
      - [x] `setRight(out: rect, value: number): rect`
      - [x] `setBottom(out: rect, value: number): rect`
    - [x] Corners
      - [x] `getTopLeft(out: vec2, rect: rect): vec2`
      - [x] `getTopRight(out: vec2, rect: rect): vec2`
      - [x] `getBottomLeft(out: vec2, rect: rect): vec2`
      - [x] `getBottomRight(out: vec2, rect: rect): vec2`
  - [ ] `circle` _(coords and radius)_
  - [ ] `box2` _(min, max)_
  - [ ] `obb2` _(center, extent and rotation)_
  - [ ] `ray2` _(origin and direction)_
  - [ ] `line2` _(origin and normal)_
  - [ ] `segment2` _(from point to point)_
- 3D Bounding Volumes
  - [ ] `vec3Ext`
  - [ ] `intersection3` _(point and normal)_
  - [x] `sphere` _(coords and radius)_
    - [x] Basic
      - [x] `create(): sphere`
      - [x] `fromValues(x: number, y: number, radius: number): sphere`
      - [x] `fromVectors(coords: vec3, radius: number): sphere`
      - [x] `set(out: sphere, x: number, y: number, radius: number): sphere`
      - [x] `setCoordsValues(out: sphere, x: number, y: number): sphere`
      - [x] `setCoords(out: sphere, coords: vec3): sphere`
      - [x] `getRadius(sphere: sphere): number`
      - [x] `getCoords(out: vec3, sphere: sphere): vec3`
      - [x] `setRadius(out: sphere, radius: number): sphere`
      - [x] `clone(sphere: sphere): sphere`
      - [x] `copy(out: sphere, sphere: sphere): sphere`
      - [x] `equals(a: sphere, b: sphere): sphere`
      - [x] `exactEquals(a: sphere, b: sphere): sphere`
      - [x] `contains(sphere: sphere, point: vec3): sphere`
    - [ ] Intersections
      - [ ] `intersectSphere(sphere: sphere, other: sphere): boolean`
      - [ ] `intersectBOX3(sphere: sphere, aabb: box3): boolean`
      - [ ] `intersectOBX3(sphere: sphere, obb: obx3): boolean`
      - [ ] `intersectRay3(sphere: sphere, ray: ray3): boolean`
      - [ ] `intersectPlane(sphere: sphere, plane: plane): boolean`
      - [ ] `intersectLine3(sphere: sphere, line: line3): boolean`
      - [ ] `intersectSeg3(sphere: sphere, segment: seg3): boolean`
    - [ ] Intersection details
      - [ ] `getIntersectionSphere(out: intersection3, sphere: sphere, other: sphere): intersection3`
      - [ ] `getIntersectionBOX3(out: intersection3, sphere: sphere, aabb: box3): intersection3`
      - [ ] `getIntersectionOBB3(out: intersection3, sphere: sphere, obb: obb3): intersection3`
      - [ ] `getIntersectionRay3(out: intersection3, sphere: sphere, ray: ray3): intersection3`
      - [ ] `getIntersectionPlane(out: intersection3, sphere: sphere, plane: plane): intersection3`
      - [ ] `getIntersectionLine3(out: intersection3, sphere: sphere, line: line3): intersection3`
      - [ ] `getIntersectionSeg3(out: intersection3, sphere: sphere, segment: seg3): intersection3`
  - [ ] `box3` _(min, max)_
  - [ ] `obb3` _(center, extent and quaternion)_
  - [ ] `ray3` _(origin and direction)_
  - [ ] `plane` _(origin and normal)_
  - [ ] `line3` _(from point to point)_
  - [ ] `seg3` _(from point to point)_
  - [ ] `frustum` **(considering)** #3
  - [ ] `transform` **(considering)** #2
- Space partitioning **(considering)** #4
- Geometry utilities
  - [x] `calculateNormal(out: vec3, a: vec3, b: vec3, c: vec3): vec3`
- Math functions and utilities
  - [x] `clamp(x: number, min: number, max: number): number`
  - [x] `clampAB(x: number, a: number, b: number): number` it's just
        `clamp(x, Math.min(a, b), Math.max(a, b))`
  - [x] `clamp01(x: number): number` it's just `clamp(x, 0, 1)`
  - [x] `lerp(a: number, b: number, t: number): number`
  - [x] `toDegrees(r: number): number`
  - [x] `Math.hypot` optional patch, that uses multiple implementations
        instead of single loop implementation, for argument counts of `0`,
        `1`, `2`, `3`, and `4`, might be faster, but I use it in my code 🤷‍♂️
