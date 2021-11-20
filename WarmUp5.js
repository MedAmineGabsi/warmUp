function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

//1-Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0

function countVowels(string) {
  var count = 0;
  var i = 0;
  if (
    string[i] === "A" ||
    string[i] === "E" ||
    string[i] === "I" ||
    string[i] === "O" ||
    string[i] === "U"
  ) {
    count = count + 1;
  }
  return (count = countVowels(string[i + 1]));
}

//2-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
function mult(n) {
  if (n === 1) {
    return 1;
  }
  return n * mult(n - 1);
}
//3-Create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr, sub) {
  for (let i = 0; i < sub.length; i++) {
    if (arr.includes(sub[i]) === true) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\
