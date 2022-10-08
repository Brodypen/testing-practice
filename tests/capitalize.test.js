import {capitalize} from "../scripts/capitalize";

test("Returns string with the first character capitalized", () => {
  expect(capitalize("frostandIce")).toBe("FrostandIce");
});
