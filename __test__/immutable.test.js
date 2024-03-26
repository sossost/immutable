import { deepCopy1, deepCopy2 } from "../src";

describe("deep copy test", () => {
  const obj1 = { a: 1, b: "a", c: "가" };
  const arr1 = [1, 2, obj1];
  const obj2 = { a: 1, b: obj1, c: arr1 };
  const obj3 = [1, obj2, arr1, obj1];
  const obj4 = new Map();
  obj4.set("a", obj1);
  obj4.set("b", obj2);
  obj4.set("c", obj3);

  test.each([obj1, obj2, obj3])("deepCopy1 function test", (obj) => {
    expect(deepCopy1(obj)).toEqual(obj);
  });

  test.each([obj1, obj2, obj3])("deepCopy2 function test", (obj) => {
    expect(deepCopy2(obj)).toEqual(obj);
  });
});
