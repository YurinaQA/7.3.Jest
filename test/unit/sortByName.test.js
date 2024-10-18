const sorting = require("../../app");

/*describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});*/

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});

describe("Without sorting", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = ["Гарри Поттер", "Властелин Колец", "Властелин Колец"];
    const expected = ["Властелин Колец", "Властелин Колец", "Гарри Поттер"];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});