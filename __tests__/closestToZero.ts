import closestToZero from "../closestToZero";

function getClosestFromZero(array: Array<number>)
{
  let absArray: Array<number> = array.map((value: number) => {return Math.abs(value)});

  let minAbs = Math.min.apply(null, absArray);

  return array.indexOf(minAbs) !== -1 ? minAbs : -minAbs;
}

describe("Test de la fonction closest_to_zero", () => {
  // Test non random
  test.each([
    [[8, 5, 10], 5],
    [[5, 4, -9, 6, -10, -1, 8], -1],
    [[8, 2, 3, -2], 2]
  ])("array %p expected %i", (testedArray, expected) => {
    expect(closestToZero(testedArray)).toBe(expected);
  });

  let randomArray: Array<Array<number>> = [];

  for(let i: number = 3; i--;)
    randomArray.push(Array.from({length: 20}, () => Math.floor(Math.random() * 500) * (Math.floor(Math.random() * 2) ? 1 : -1)));

  let jestRandomArray: Array<(Array<number>|number)[]> = randomArray.map((element: Array<number>) => {
    return [element, getClosestFromZero(element)];
  });

  test.each(jestRandomArray)("array %p expected %i", (testedArray, expected) => {
    expect(closestToZero(testedArray)).toBe(expected);
  });
});