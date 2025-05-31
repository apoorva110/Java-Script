function Add(){
    alert("Click me")
    let a = parseInt(prompt("Enter first number "));
    let b = parseInt(prompt("enter second number"))
    let c = a+b
    console.log(c)
}
// function Red(){
//     alert("CLICK")
//     let color=document.getElementById('color')
//     color.style.backgroundColor="red";
// }
// function Blue(){
//     alert("CLICK")
//     let color=document.getElementById('color')
//     color.style.backgroundColor="blue";
// }
// function Yellow(){
// alert("CLICK")
//     let color=document.getElementById('color')
//     color.style.backgroundColor="green";
// }
// function Green(){
// alert("CLICK")
//     let color=document.getElementById('color')
//     color.style.backgroundColor="yellow";
// }
function Color(cl){
    document.body.style.backgroundColor=cl
}