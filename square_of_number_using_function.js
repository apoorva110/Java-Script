//Q- Wap to take a input from the user find square of that number then check number is even or odd using function type 1
function Square(){
    let s = prompt("Enter any number: ")
    let square = s*s;
    alert("The square of the given number is: " +square);
    if(s%2==0)
        alert("The given number is even")
    else
        alert("The given number is odd")
}
Square()