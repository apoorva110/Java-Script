
// function Divisible(){
//     let a = prompt("Enter a number: ")
//     let c;
//     if(a%3==0){
            console.log("It is divisible by 3")
//         for(let i=1;i<=10;i++){
//             c = 3 * i;
//         }
//         console.log(c)
//     }
//         else{
//         alert("The entered number is: " +a)
//         }
// }
// Divisible()
function Demo(a){
    if(a%3==0)
    {
        console.log("it is divisible by 3")
        let num=a;
        for(let i=1;i<=10;i++){
            console.log(num * i )
        }
    }
    
    else{
        console.log("not divisble by 3")
}
    return a
}
a=parseInt(prompt("enter the divisible a"))
console.log(Demo(a))
