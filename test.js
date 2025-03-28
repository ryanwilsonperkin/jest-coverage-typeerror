const { accessProperty } = require("./index");

it("should throw a TypeError", () => {
  expect(() => accessProperty(undefined)).toThrow(
    new TypeError(
      "Cannot destructure property 'value' of 'o' as it is undefined."
    )
  );
});
