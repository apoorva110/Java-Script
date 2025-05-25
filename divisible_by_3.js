function Divisible(){
    let a = prompt("Enter a number: ")
    let c;
    if(a%3==0){
        for(let i=1;i<=10;i++){
            c = a * i;
        }
        console.log(c)
    }
        else{
        alert(a)
        }
}
Divisible()
