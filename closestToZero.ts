export default function closestToZero(userInput : Array<number>): number {
    let closestNumber: number= userInput.reduce((acc: number, val: number) => {
      if (acc === Infinity)
        return val;

      let substraction = Math.abs(acc) - Math.abs(val);

      // In this case, val is closer
      // Here I use Math.abs to be sure that it's positive
      /**
       * NOTE: Delete Math.abs and check with that args
       * -0 0
       * Surprise :)
       */
      if (substraction > 0)
        return val === 0 ? Math.abs(val) : val;

      // We return the positive integer if the result is 0
      if (substraction === 0)
        return acc >= 0 ? Math.abs(acc) : val;

      // Nothing else match, return the current value
      return acc;
    }, Infinity);

    return closestNumber;
}