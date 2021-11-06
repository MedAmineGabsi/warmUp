// 1 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'
function counting(n) {
  var i = 1;
  var result = [];
  while (i < n + 1) {
    result.push(i);
    i++;
  }
  result.toString();
  return result;
}

// 2 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive.
//You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
function meetAndGreet(n) {
  var counter = 1;
  var innerCount;
  var total = "";
  var linebreak = "/n";
  var comma = ", ";
  while (counter <= n) {
    if (n === 1) {
      total = "welcome " + counter;
    } else if (counter === 1) {
      total = "welcome " + counter + linebreak;
    } else {
      total = total + "welcome " + counter + comma + "meet ";
      innerCount = 1;
      while (innerCount < counter) {
        if (innerCount === counter - 2) {
          total = total + innerCount + " and ";
        } else if (innerCount === counter - 1) {
          total = total + innerCount;
        } else {
          total = total + innerCount + comma;
        }
        innerCount++;
      }
      total = total + linebreak;
    }
    counter++;
  }
  return total;
}
// USE RECURSION
// 3- Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str,
//which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
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
