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

/* Conversion Binary To decimal
e.g => 1001 -> 9
 */
const binary = getBinary();
console.log(binary);

function getDecimal(n = 1001) {
  let decimal = 0;
  let power = 1;

  while (n !== 0) {
    let remainder = n % 10;
    n = Math.floor(n / 10);
    decimal += remainder * power;
    power *= 2; 
  }
  return decimal
}

const decimal = getDecimal();
console.log(decimal)