let v=0;

function increment(){
    v++;
    document.getElementById('count').innerHTML = v;
}
function decrement(){
    v--;
    if(v>=0){
    document.getElementById('count').innerHTML = v;
}}
function reset(){
    v=0;
    document.getElementById('count').innerHTML = v;
}
function hoveronme(){
    let color=document.getElementById('color')
    color.style.color="red";
}
function textchange(){
    let h1=document.getElementById('head1')
    h1.innerHTML="GET OUT"
    h1.style.color="blue"
}
function txtchn(){
    let h1=document.getElementById('head1')
    h1.innerHTML="HOVER ON ME"
    h1.style.color="black"
}