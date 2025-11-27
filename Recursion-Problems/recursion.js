/********************************************************************************************************************************************** 

 NOTE:   Recursion -> When a function calls itself to solve a problem by breaking it into sub-problems until it reaches a simple base case 

 Recursion Say -> You Don't need to solve the whole problem at once just pic a small part of the problem and solve it and for remaining problem make a recursive call

 TC -> Total no. of recursion calls * Work done in each calls
 SC -> Depth of recursion tree(Height of call stack) * Memory in each call

 Note -> Recursion sometimes comes with teh baggage of the call stack

***********************************************************************************************************************************************/

/**************************************************  
   Print Numbers from N to 1 and vice versa
 
**************************************************/

function printBackward(n = 9) {
  if (n === 1) {
    console.log(n);
    return;
  }
  printBackward(n - 1);
  console.log(n);
}

function printForward(n = 9) {
  if (n === 1) {
    console.log(n);
    return;
  }
  printForward(n - 1);
  console.log(n);
}

printForward();
console.log('\n............................\n');
printBackward();

/*******************************************************************
       Calculate N Factorial using Recursion
       TC -> O(n)
       SC -> O(n) (Height of call stack )

 *******************************************************************/

function calculateFactorial(n = 7) {
  if (n == 1) return 1;
  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial());

/*******************************************************************
       Sum of N Numbers using Recursion

 *******************************************************************/

function nNumSum(n = 9) {
  if (n === 1) return n;
  return n + nNumSum(n - 1);
}

console.log(nNumSum());

/*******************************************************************
       calculate the sequence of the fibonacci sequence
                  TC -> 2^n
                  SC -> O(n)

 *******************************************************************/

function getFibonacciSequence(n = 9) {
  if (n == 0 || n == 1) return n;
  return getFibonacciSequence(n - 1) + getFibonacciSequence(n - 2);
}

console.log(getFibonacciSequence());

/*******************************************************************
      Check if array is sorted in Ascending order or not
                TC -> O(n)
                SC -> O(n)

 *******************************************************************/

function isSorted(arr = [1, 2, 3, 4, 5], n = 5) {
  if (n === 0 || n === 1) return true;
  return arr[n - 1] >= arr[n - 2] && isSorted(arr, n - 1);
}

console.log({ isArraySorted: isSorted() });

/*******************************************************************
          Recursive Binary Search To get the target element index
                TC -> O(n)
                SC -> O(n)

 *******************************************************************/

function getTarget(arr = [-1, 0, 3, 5, 9, 12], target = 5, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    start = mid + 1;
    return getTarget(arr, target, start, end);
  } else if (arr[mid] > target) {
    end = mid - 1;
    return getTarget(arr, target, start, end);
  }
}

console.log({ targetIndex: getTarget() });

/*******************************************************************
    Find the all subsets from unique elements using recursion
          Input: [1,2,3]
          Output: {}, {1}, {2}, {3}, {1,2}, {13}, {2,3}, {1, 2, 3}

          Tc -> 2^n * n
          SC -> O(n)

 *******************************************************************/

function getAllSubsets() {
  let subsets = [];
  let currentSubset = [];
  let i = 0;
  let arr = [1, 2, 3];

  function findSubsets(arr, i) {
    if (i === arr.length) {
      subsets.push([...currentSubset]);
      return;
    }
    currentSubset.push(arr[i]);

    /* Inclusion Call */
    findSubsets(arr, i + 1);

    /* Backtracking step -> before making inclusion call we come back on original state */
    currentSubset.pop();
    findSubsets(arr, i + 1);
  }

  findSubsets(arr, i);
  return subsets;
}

console.log(getAllSubsets());
/*******************************************************************
        Find the all unique subsets from duplicate elements using recursion 
          Input: [1,2,2]
          Output: {}, {1}, {2}, {1, 2}, {2, 2}, {1, 2, 2}

          TC -> n*logn + 2*n * n
          Sc -> O(n)

********************************************************************/

function getUniqueSubsets() {
  let arr = [1, 2, 3, 2, 3].sort((a, b) => a - b);
  let i = 0;
  let currentSubset = [];
  let subsets = [];
  function calculateSubsets(arr, i) {
    if (i === arr.length) {
      subsets.push([...currentSubset]);
      return;
    }

    /* Inclusion Choice */
    currentSubset.push(arr[i]);
    calculateSubsets(arr, i + 1);

    /* skip duplicates */
    let idx = i + 1;
    while (idx < arr.length && arr[idx] === arr[idx - 1]) idx++;
    /* exclusion */
    currentSubset.pop();
    calculateSubsets(arr, idx);
  }

  calculateSubsets(arr, i);

  return subsets;
}

console.log(getUniqueSubsets());
