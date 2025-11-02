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
};

console.log(getMaxNum(nums))
