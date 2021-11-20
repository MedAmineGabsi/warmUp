
function each(coll, callback) {
  if (Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      callback(coll[i], i);
    }
  } else {
    for (var key in coll) {
      callback(coll[key], key);
    }
  }
}

// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  var result = [];
  each(obj, function (value, key) {
    result.push(key);
  });
  return result;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  var result = 0;
  each(obj, function (value, key) {
    result++;
  });
  return result;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(array) {
  var result = [];
  each(array, function (element, index) {
    result.splice(element["id"], 0, element);
  });
  return result;
}

