//WAP TO CHECK WHETHER THE NUMBER IS DIVISIBLE BY EITHER 2 OR 3
let a=prompt("Enter any number: ")
if(a%2==0)
    alert("The number is divisible by 2")
else if(a%2 ==0 && a%3==0)
    alert("This number is divisible by both 2 & 3")
else if(a%3==0)
    alert("The number is divisible by 3")
else
    alert("The number is not divisible by none")