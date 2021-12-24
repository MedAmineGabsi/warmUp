
//1
// Given an array of integers and an integer n,
// find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
// If n is not in the given array, return an empty array [].
// Assume that n and all values in the given array will always be integers.
// Example:
// findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]

function findAll(arr, ff) {
  var acc = [];
  _.each(arr, function (element, i) {
    if (element === ff) {
      acc.push(i);
    }
  });
  return acc;
}

//2
// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.
// For Example:
// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
// Note: You will be always given non-empty array containing Positive values.

//3
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//              capitalize("azerty") = ['AzErTy','aZeRtY']
// The input will be a lowercase string with no spaces.

function capitalize(str) {
  var letters = str.split("");
  var firstArray = _.map(letters, function (element, i) {
    if (i % 2 === 0) {
      element.toUpperCase();
    }
    var secondArray = _.map(letters, function (element, i) {
      if (i % 2 === 1) {
        element.toUpperCase();
      }
      return [firstArray.join(""), secondArray.join("")];
    });
  });
}
