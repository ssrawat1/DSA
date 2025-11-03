// /* Smallest number in array: */

// let nums = [5, 15, 22, 1, -15, 24];

// function getMinNum(nums) {
//   let maxNum = Number.POSITIVE_INFINITY;
//   for (let num of nums) {
//     if (maxNum > num) maxNum = num;
//   }
//   return maxNum;
// }

// console.log(getMinNum(nums));

// /* Find the Largest number in an array: */

// function getMaxNum(nums) {
//   let minNum = Number.NEGATIVE_INFINITY;
//   for (let num of nums) {
//     if (minNum < num) minNum = num;
//   }
//   return minNum;
// }

// console.log(getMaxNum(nums));

// /* Linear Search:
//    find the target and return its index  if doesn't exist then return -1
//    Target = 8;
//  */

// let arr = [4, 2, 7, 8, 1, 2, 5];
// let target = 8;

// function getTargetIndex(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1;
// }
// console.log(getTargetIndex(arr, target));

// /* Reverse an array: */

// let array = [1, 3, 5, 7, 9, 2, 4, 6, 8];

// function reverse(array) {
//   let n = array.length - 1;
//   console.log({ n });
//   for (let i = 0; i <= Math.floor(n / 2); i++) {
//     [array[i], array[n - i]] = [array[n - i], array[i]];
//   }
//   return array;
// }
// console.log(reverse(array));

/* Write a function to swap max and min number of an array: */

let myArray = [1, 3, 5, 7, 9, 8, 6, 4, 2];
function swapMaxAndMin(arr) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  let minIdx = null;
  let maxIdx = null;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIdx = i;
    }
    if (max < arr[i]) {
      max = arr[i];
      maxIdx = i;
    }
  }
  [arr[minIdx], arr[maxIdx]] = [arr[maxIdx], arr[minIdx]];
  return arr
}

console.log(swapMaxAndMin(myArray));
