export declare function clamp(x: number, min: number, max: number): number;
export declare function clamp01(x: number): number;
export declare const saturate: typeof clamp01;
export declare function clampAB(x: any, a: number, b: number): number;
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 */
export declare function toDegrees(angle: number): number;
export declare function patchMathHypot(previous?: boolean): void;
