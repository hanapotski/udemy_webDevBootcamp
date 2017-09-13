// 1. Print all numbers between -10 and 19
// 2. Print all even numbers between 10 and 40
// 3. Print all odd numbers between 300 and 333
// 4. print all numbers divisible by 5 and 3 between 5 and 50


console.log("Print all numbers between -10 and 19");
var one = -10;
while (one < 20) {
  console.log(one);
  one++;
}

console.log("Print all even numbers between 10 and 40");
var two = 10;
while (two <= 40) {
  console.log(two);
  two += 2;
}

console.log("Print all odd numbers between 300 and 333");
var three = 300;
while (three <= 333) {
  if (three % 2 !== 0) {
    console.log(three);
  }
  three++;
}


console.log("print all numbers divisible by 5 and 3 between 5 and 50");
var four = 5;
while (four <= 50) {
  if (four % 3 === 0 || four % 5 === 0) {
    console.log(four);
  }
  four++;
}


//SOLUTION
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;

while(counter < 20){
	console.log(counter);
	counter++;
}

console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");
var counter = 10;

while(counter <= 40){
	console.log(counter);
	counter+=2;
}

// while(counter <= 40){
// 	if(counter % 2 === 0){
// 		console.log(counter);
// 	}
// 	counter+=1;
// }

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var counter = 300;

while(counter <= 333){
	if(counter % 2 !== 0){
		console.log(counter);
	}
	counter+=1;
}




console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var counter = 5;

while(counter <= 50){
	if(counter % 5 === 0 && counter % 3 === 0){
		console.log(counter);
	}
	counter+=1;
}
