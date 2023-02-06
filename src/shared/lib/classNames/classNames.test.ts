import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only one param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered red";
    expect(
      classNames("someClass", { hovered: true, red: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mod false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, red: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });

  test("with mod false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, red: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
