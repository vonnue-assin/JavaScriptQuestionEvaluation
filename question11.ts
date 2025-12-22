//write a function to sort all the odd and even numbers from an array of numbers and double its value.

const sortOddAndEvenNumbers = (array: number[]) => {
  const oddNumbers = array.filter((n) => n % 2 !== 0).map((n) => n * 2);
  const evenNumbers = array.filter((n) => n % 2 == 0).map((n) => n * 2);

  return {
    oddNumbers,
    evenNumbers,
  };
};

const result = sortOddAndEvenNumbers([1, 2, 3, 4, 5, 6, 7]);
console.log(result);
