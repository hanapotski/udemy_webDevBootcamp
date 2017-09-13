// 1. Print all numbers between -10 and 19
// 2. Print all even numbers between 10 and 40
// 3. Print all odd numbers between 300 and 333
// 4. Print all numbers divisible by 5 and 3 between 5 and 50


console.log("Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
  console.log(i);
}

console.log("Print all even numbers between 10 and 40");
for (var i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Print all odd numbers between 300 and 333");
for (var i = 300; i <= 333; i++) {
  if (i % 2 !== 0){
    console.log(i);
  }
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (var i = 5; i <= 50; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}


SOLUTION
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");

for(var i = -10; i < 20; i++){
	console.log(i)
}



console.log("PRINTING ALL EVEN BETWEEN 10 AND 40");

// for(var i = 11; i <= 40; i += 2){
// 	console.log(i);
// }

for(var i = 10; i <= 40; i += 1){
	if(i % 2 === 0) {
		console.log(i);
	}
}




console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}
