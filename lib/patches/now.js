"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var performance_now_1 = __importDefault(require("performance-now"));
// @ts-ignore
globalThis.performance = globalThis.performance || { now: performance_now_1.default };
exports.default = performance_now_1.default;
