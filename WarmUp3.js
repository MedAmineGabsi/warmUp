//1
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated,
//and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
function repeatString(word, nbr) {
  if (nbr === 0) {
    return "";
  }
  return word + repeatString(word, nbr - 1);
}
// // USE RECURSION

//2
// Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]
function isEven(x, y) {
  var result = [];
  for (let i = x; i < y + 1; i++) {
    if (i % 2 === 0) {
      result.push(i);
    } else {
      continue;
    }
  }
  return result;
}
//3
// write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
function sum(x, y) {
  var result = 0;
  while (x < y + 1) {
    result += x;
    x++;
  }
  return result;
}
//4
// Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less
//than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
//5
// write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//
function decimals(x, y){
  if(typeof x != typeof y && typeof x != "number"){
    return false
  } return x.toFixed(y).toString()
}
//6
// write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArray(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.unshift(element);
  }
  return result;
}
//7
// Write a function called laugh() that takes one parameter,
// num that represents the number of "ha"s to return.
// laugh(6); => "hahahahahaha"
function laugh(n) {
  if (n === 0) {
    return "";
  }
  return "ha" + laugh(n - 1);
}
