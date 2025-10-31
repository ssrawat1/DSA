/* As you know our computer only understand the 0/1 which we called binary number so it is important to understand how it store the data so that we can optimize the our memory and prevent it from creating unwanted spaces */

/* Conversion from Decimal To Binary:
 eg => 123 divide it by 2 until we don't get zero then reverse the remainder to get its binary

*/

function getBinary(n = 123) {
  let binary = 0;
  let power = 1;

  while (n !== 0) {
    let remainder = n % 2;
    n = Math.floor(n / 2);
    binary += power * remainder;
    power *= 10;
  }
  return binary;
}

const binary = getBinary();
console.log(binary);

/* Conversion Binary To decimal
e.g => 1001 -> 9
 */

function getDecimal(n = 1001) {
  let decimal = 0;
  let power = 1;

  while (n !== 0) {
    let remainder = n % 10;
    n = Math.floor(n / 10);
    decimal += remainder * power;
    power *= 2;
  }
  return decimal;
}

const decimal = getDecimal();
console.log(decimal);

/* Addition in Binary Number:

e.g -> 0 + 0 => 0
       0 + 1 => 1
       1 + 1 => 10 // In general, 1 + 1 = 2 and its binary is 10  
      
 */

/* Two's Complement:
 e.g -> If we want to store the -ve number for that we use two's complement
 How we can calculate the Two's Complement:
 Steps: (1) Convert it into Binary
        (2) Prefix with 0 (It is Most Significant Bit (MSB) which help us to identify the +ve and -ve number 0 -> for +ve and 1 -> for -ve)
        (3) 1's complement means replace 0 <-> 1 and 1 <-> 0 (flip)
        (4) Add 1
*/

/* Bitwise Operators:
 It help us to perform the operation on binary forms of decimal numbers:
 Types of bitwise Operator: (1) Bitwise & // same as Logical &&
                            (2) Bitwise | // same as Logical ||
                            (3) Bitwise ^ (XOR):Rule
                                                     (a) 0^0 = 0, 1^1 = 0 (same bit)
                                                     (b) 0^1 = 1, 1^0 = 1 (different bit)
                            (4) Bitwise << (left shift) // 1001 << 1  shift digit one place towards left
                            (5) Bitwise >> (right shift) // 1001 >> 1 shift digit one place toward right
   
 */
