import { assertEquals } from "./deps.ts";

Deno.test({
  name: "example test",
  fn: () => {
    assertEquals(1, 1);
  },
});
