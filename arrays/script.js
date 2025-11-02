/* Smallest number in array: */

let nums = [5, 15, 22, 1, -15, 24];

function getMaxNum(nums) {
  let maxNum = Number.POSITIVE_INFINITY;
  for (let num of nums) {
    if (maxNum > num) maxNum = num;
  }
  return maxNum;
}

console.log(getMaxNum(nums));

 