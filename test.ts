import { assertEquals } from "./test_deps.ts";
import { add } from "./mod.ts";

Deno.test({
  name: "add",
  fn: () => {
    assertEquals(add(1, 1), 2);
  },
});
