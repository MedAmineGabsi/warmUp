function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

function filter(coll, predicate) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (value, key) {
    if (predicate(value, key)) {
      if (Array.isArray(coll)) {
        acc.push(value);
      } else {
        acc[key] = value;
      }
    }
  });
  return acc;
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

function reduce(coll, f, acc) {
  if (acc === undefined) {
    if (Array.isArray(coll)) {
      var acc = coll[0];
      coll = coll.slice(1);
    } else {
      acc = coll[Object.keys(coll)[0]];
      delete coll[Object.keys(coll)[0]];
    }
    each(coll, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
}

// ======= EACH =================================================================================================================================================
// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240

// The input string always has more than five digits.

// ========================================================================================================================================================

function greatestProduct(numbers) {
  var arrayNumber = numbers.split("");
  var acc = [];
  each(arrayNumber, function (element, key) {
    var temp = arrayNumber.splice(key, key + 5);
    var numAcc = 1;
    each(temp, function (element, key) {
      numAcc *= element;
    });
    acc.push(numAcc);
  });
  var max = acc[0];
  each(acc, function (element, key) {
    if (max > acc[key]) {
      max = element;
    }
  });
  return max;
}

// ============== MAP ==========================================================================================================================================

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.

// ex. shiftLetters('hello') // => 'ifmmp'

// ex. (shiftLetters('abcxyz') // => "bcdyz{"

// ========================================================================================================================================================

function shiftLetter(string) {
  var letters = string.split("");
  var newArray = map(letters, function (element) {
    return element.charCodeAt(0);
  });
  var crypted = map(newArray, function (element) {
    return String.fromCharCode(element + 1);
  });
  return crypted.join("");
}

// ============= FILTER ===========================================================================================================================================

// Your goal in this warmUp is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// ========================================================================================================================================================

function arrayDiff(array, predic) {
  return filter(array, function (element, key) {
    return !predic.includes(element);
  });
}

// ============= REDUCE ===========================================================================================================================================

// Write a function that takes a string and returns an object representing the character

// count for each letter. Use .reduce to build this object.

// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}

// ========================================================================================================================================================
function countLetters(string) {
  var strArray = string.split("");
  return reduce(
    strArray,
    function (acc, element) {
      if (acc.hasOwnProperty(element)) {
        return (acc[element] += 1);
      } else {
        return (acc[element] = 1);
      }
    },
    {}
  );
}

//Good Luck :))
