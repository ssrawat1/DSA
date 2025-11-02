/* Smallest number in array: */

let nums = [5, 15, 22, 1, -15, 24];

function getMinNum(nums) {
  let maxNum = Number.POSITIVE_INFINITY;
  for (let num of nums) {
    if (maxNum > num) maxNum = num;
  }
  return maxNum;
}

console.log(getMinNum(nums));

/* Find the Largest number in an array: */

function getMaxNum(nums) {
  let minNum = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    if (minNum < num) minNum = num;
  }
  return minNum;
}

console.log(getMaxNum(nums));

/* Linear Search:
   find the target and return its index 
   Target = 8;
 */

let arr = [4, 2, 7, 8, 1, 2, 5];
let target = 8;

function getTargetIndex(arr, target) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === target) return i;
  }
}
console.log(getTargetIndex(arr, target));
