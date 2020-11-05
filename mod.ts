import init, { add as wasmAdd, source } from "./wasm.js";

await init(source);

export function add(a: number, b: number): number {
  return wasmAdd(a, b);
}
