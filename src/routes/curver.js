import { writable } from 'svelte/store';

const squrtCurve = (/** @type {number} */ x) => Math.sqrt(x);

export const curveFunction = writable(squrtCurve);

export const curveData = [
  { range: "81-100%", percent: "90-100%" },
  { range: "81-100%", percent: "80-90%" },
  { range: "49-64%", percent: "70-80%" },
  { range: "36-49%", percent: "60-70%" },
  { range: "25-36%", percent: "50-60%" },
  { range: "0-25%", percent: "<50%" },
];


export const colors = [
  "#22c55e",
  "#84cc16",
  "#eab308",
  "#f97316",
  "#ef4444",
  "#ef4444",
]