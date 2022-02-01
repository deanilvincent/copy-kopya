const { copy } = require("./index");

it("Should return undefined if obj param is empty", () => {
  expect(copy()).toBe(undefined);
});

it("Should return equal to OBJECT of data", () => {
  const data = 1;
  expect(copy(data)).toStrictEqual(data);
});

it("Should return equal to ARRAY of data", () => {
  const data = [1, 2, 3];
  expect(copy(data)).toStrictEqual(data);
});

it("Should return equal to ARRAY of object data", () => {
  const data = [{ name: "John" }, { name: "Peter" }];
  expect(copy(data)).toStrictEqual(data);
});

it("Should return equal to FUNCTION", () => {
  const test = () => "Hello world";
  expect(copy(test())).toStrictEqual(test());
});

it("Should return equal to MAP", () => {
  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  expect(copy(map)).toStrictEqual(map);
});

it("Should return equal to SET", () => {
  const set = new Set();
  set.add(1); // Set [ 1 ]
  set.add(5); // Set [ 1, 5 ]
  set.add("Hey"); // Set [ 1, 5, "Hey" ]
  expect(copy(set)).toStrictEqual(set);
});
