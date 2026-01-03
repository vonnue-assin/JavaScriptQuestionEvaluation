// Write a JavaScript program to sort a list of elements using Merge sort.

// function mergeSort(arr: number[]): number[] {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid: number = Math.floor(arr.length / 2);
//   const left: number[] = arr.slice(0, mid);
//   const right: number[] = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left: number[], right: number[]): number[] {
//   const result: number[] = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Example usage
// const number: number[] = [38, 27, 43, 3, 9, 82, 10];

// console.log("Before sorting:", number);
// console.log("After sorting:", mergeSort(number));
