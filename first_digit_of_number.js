//Q- WRITE A PROGRAM TO PRINT FIRST DIGIT OF THE GIVEN NUMBER
var a = prompt("Enter any number: ");
var b = a
console.log(b);
while(b>=10)
    b = b/10
console.log("First digit of the given number is: " +b);