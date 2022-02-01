const { copy } = require("./index");

it("Should return undefined if obj param is empty", () => {
  expect(copy()).toBe(undefined);
});

it("Should return equal to array of data", () => {
  const data = [1, 2, 3];
  expect(copy(data)).toStrictEqual(data);
});

it("Should return equal to function", () => {
  function test() {
    return "Hello world";
  }
  expect(copy(test())).toStrictEqual(test());
});
