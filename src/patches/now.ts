import now from "performance-now";

// @ts-ignore
globalThis.performance = globalThis.performance || { now };

export default now;
