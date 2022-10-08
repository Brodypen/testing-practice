import {reverse} from "../scripts/reverse";

test("Returns string with the first character capitalized", () => {
  expect(reverse("reverse")).toBe("esrever");
});
