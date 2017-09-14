// printReverse()
// Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)

console.log("printReverse");

function printReverse(arr){
  arr.reverse();
  console.log(arr);
}
printReverse([1,2,3,4]);
printReverse(["a", "b", "c", "d"]);


// isUniform()
// Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

function isUniform(arr){
  var first = arr[0];
  arr.forEach(function(x){
    if (x !== first){
      return false;
    } else {
      return true;
    }
  });
}
console.log("isUniform");
isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);


// sumArray()
// Write a function sumArray that accepts an array of numbers and returns the sum of all numbers in the array

console.log("sumArray");
function sumArray(arr){
  var sum = 0;
  arr.forEach(function(num){
    sum += num;
  });
  console.log(sum);
}

sumArray([1, 2, 3]); //6
sumArray([10, 3, 10, 4]); //27
sumArray([-5, 100]); //95


// max()
// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(arr){
  var max = 0;
  arr.forEach(function(num){
    if (num >= max) {
      max = num;
    }
  });
  console.log(max);
}

console.log("max");
max([1,2,3]);
max([10, 3, 10, 4]);
max([-5, 100]);
