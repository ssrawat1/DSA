/********************************************************************************************************************************************** 

 NOTE:   Recursion -> When a function calls itself to solve a problem by breaking it into sub-problems until it reaches a simple base case 

***********************************************************************************************************************************************/

/*  
   Print Numbers from N to 1 and vice vers

*/

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
 console.log("\n............................\n")
 printBackward()