/********************************************************************************************************************************************** 

 NOTE:   Recursion -> When a function calls itself to solve a problem by breaking it into sub-problems until it reaches a simple base case 

 TC -> Total no. of recursion calls * Work done in each calls
 SC -> Depth of recursion tree(Height of call stack) * Memory in each call

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
