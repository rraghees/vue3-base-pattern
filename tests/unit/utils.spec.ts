import { add } from "@/shared/utils/utils";

describe("test add function", () => {
  it("add 2 + 2 equals 4", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("add 15 + 7 equals 4", () => {
    expect(add(15, 2)).toEqual(17);
  });
});
