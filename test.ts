import { assertEquals } from "https://deno.land/std@0.67.0/testing/asserts.ts";
import { add } from "./mod.ts";

Deno.test({
  name: "add",
  fn: () => {
    assertEquals(add(1, 1), 2);
  },
});
