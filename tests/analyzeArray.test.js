import { analyzeArray } from "../scripts/analyzeArray";

describe("Testing analyzeArray", () => {
  it("returns an object with the correct properties", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
