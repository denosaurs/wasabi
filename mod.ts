import init, {
  source,
  add as wasm_add,
} from "./wasm.js";

await init(source);

export function add(a: number, b: number): number {
  return wasm_add(a, b);
}
