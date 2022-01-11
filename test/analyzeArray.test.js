import arrayOfNumbers from "../code/analyzeArray";

it("Analyzes numbers in array to get the minimum, maximum, length & average", () => {
  expect(arrayOfNumbers([1, 3, 8, 6, 10])).toEqual({
    min: 1,
    max: 10,
    length: 5,
    average: 5.6,
  });
});
