/* NOTE: This type of questions do not ask in interviews but it help you to build the strong command on nested loops */

/* SQUARE PATTERN FOR ANY N NUMBERS:
 e.g ->  *****
         *****
         *****
 */

function printSquarePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    // decide number of lines
    for (let j = 0; j < n; j++) {
      // decide what will come in each line
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

const starPattern = printSquarePattern();
console.log(starPattern);

/* Same Variant of square pattern: for characters:
  e.g ->  A B C D
          A B C D
          A B C D
  */

function printCharSquarePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    let code = 65;
    for (let j = 0; j < n; j++) {
      pattern += String.fromCharCode(code + j) + ' '; // for small case replace 65 <-> 97
    }
    pattern += '\n';
  }
  return pattern;
}

let charPattern = printCharSquarePattern();
console.log(charPattern);

/* Another Variant of square pattern: for Number:
 e.g ->   1 2 3
          4 5 6
          7 8 9

*/

function printUniqueNumSquarePattern(n = 3) {
  let pattern = '';
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += count + ' ';
      count++;
    }
    pattern += '\n';
  }

  return pattern;
}

const uniqueNumPattern = printUniqueNumSquarePattern();
console.log(uniqueNumPattern);

/* Same Variant of square pattern: for characters:
 e.g -> A B C D
        E F G H
        I J K L
  */

function printUniqueCharSquarePattern(n = 4) {
  let pattern = '';
  let code = 65;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += String.fromCharCode(code) + ' ';
      code++;
    }
    pattern += '\n';
  }
  return pattern;
}

const uniqueCharPattern = printUniqueCharSquarePattern();
console.log(uniqueCharPattern);

/* TRIANGLE STAR (*) PATTERN:
e.g ->    *
          * *
          * * *
          * * * *
*/

function createStartTrianglePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  return pattern;
}

const triangleStartPattern = createStartTrianglePattern();
console.log(triangleStartPattern);

/* Triangle Pattern for Numbers:
  e.g ->     1
             2 2
             3 3 3
             4 4 4 4
*/

function createNumberTrianglePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += i + 1 + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

const numTrianglePattern = createNumberTrianglePattern();
console.log(numTrianglePattern);

/* Triangle Pattern for Characters:
  e.g ->     A
             B B
             C C C
             D D D D
*/

function createCharTrianglePattern(n = 4) {
  let pattern = '';
  let code = 65;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      pattern += String.fromCharCode(code + i) + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

const charTrianglePattern = createCharTrianglePattern();
console.log(charTrianglePattern);

/* Triangle Pattern for Number:
  e.g ->     1
             1 2
             1 2 3
             1 2 3 4
*/

function createNewNumTrianglePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      pattern += j + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}

const newNumTrianglePattern = createNewNumTrianglePattern();
console.log(newNumTrianglePattern);

/* Reverse Triangle Pattern:
 e.g ->   1      
          2 1
          3 2 1
          4 3 2 1

*/

function createReverseTrianglePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    let newStr = '';
    for (let j = 1; j <= i + 1; j++) {
      newStr = j + ' ' + newStr;
    }
    pattern += newStr + '\n';
  }
  return pattern;
}

const reverseTrianglePattern = createReverseTrianglePattern();
console.log(reverseTrianglePattern);

/* Floyd's Triangle Pattern:
e.g ->    1      
          2 3
          4 5 6
          7 8 9 10
*/

function createFloydsTrianglePattern(n = 4) {
  let pattern = '';
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      pattern += count + ' ';
      count++;
    }
    pattern += '\n';
  }
  return pattern;
}
const floydsPattern = createFloydsTrianglePattern();
console.log(floydsPattern);

/* Inverted Triangle Pattern:
e.g ->   1 1 1 1
           2 2 2
             3 3
               4
*/

function createInvertedTrianglePattern(n = 4) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    /* To create spaces: */
    for (let k = 0; k < i; k++) {
      pattern += '  ';
    }
    /* To create numbers */
    for (let j = 1; j <= n - i; j++) {
      pattern += i + 1 + ' ';
    }
    pattern += '\n';
  }
  return pattern;
}
const invertedTrianglePattern = createInvertedTrianglePattern();
console.log(invertedTrianglePattern);

/* Pyramid Pattern:
e.g ->         1
             1 2 1
           1 2 3 2 1
         1 2 3 4 3 2 1
*/

function getPyramidPattern(n = 4) {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    /* print empty spaces: */
    for (let j = 0; j < n - i; j++) {
      pattern += ' ' + ' ';
    }
    /* print numbers */
    let newStr = '';
    for (let k = 1; k < i + 1; k++) {
      newStr += k + ' ';
    }

    pattern += newStr;
    newStr = '';

    /* print numbers: */
    for (let l = 1; l < i; l++) {
      newStr = l + ' ' + newStr;
    }
    pattern += newStr + '\n';
  }
  return pattern;
}

const pyramidPattern = getPyramidPattern();
console.log(pyramidPattern);
