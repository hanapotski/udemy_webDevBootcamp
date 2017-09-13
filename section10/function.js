// Functions Problem Set
//
// isEven()
// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
//
// factorial()
// Write a function factorial() which takes a single numberic argument and returns the factorial of that number
// 0! = 1
//
// kebabToSnake()
// write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version. Replace "-"s with "_"s


function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    var answer = num;
    for (var i = num - 1; i >= 1; i--){
      answer *= i;
    }
    return answer;
  }
}


function kebabToSnake(kebab) {
  var snake = kebab.replace("-", "_");
  return snake;
}


SOLUTIONS
//isEven

// function isEven(num){
// 	//return true if even
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	//return false otherwise
// 	else {
// 		return false
// 	}
// }

function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

// factorial(4) 4 x 3 x 2 x 1


function kebabToSnake(str) {
	//replace all '-' with "_"'s
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;

}
