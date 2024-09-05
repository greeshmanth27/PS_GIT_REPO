num = -10;

if (num == 0 || num > 0) {
  console.log("It is a Positive number");
} else {
  console.log("It is a Non Positive number");
}

score = 88;
if (score >= 90 && score <= 100) {
  console.log("A Grade");
} else if (score >= 80 && score <= 100) {
  console.log("B Grade");
} else if (score >= 70 && score <= 100) {
  console.log("C Grade");
} else if (score >= 60 && score <= 100) {
  console.log("D Grade");
} else if (score >= 50 && score <= 100) {
  console.log("E Grade");
} else if (score > 35 && score < 50) {
  console.log("pass");
} else if (score < 35) {
  console.log("FAIL");
} else {
  console.log("user enter wrong input");
}

let a=5
let b="5"
console.log(a==b);  
// double equals checks the value only.It gives true because it checks 5 or not. 
console.log(a!==b);
// here it checks the data types also. in this the data is equal but the data types are different.    
