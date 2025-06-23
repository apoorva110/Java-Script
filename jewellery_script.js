import jewellery from "./our_jewellery.js";
console.log(jewellery)

let jewelleryContainer=document.getElementById("jewellery")
console.log(jewelleryContainer)

jewelleryContainer.innerHTML=jewellery.map((e)=>{
    return`
    <div style="height: 200px; width:200px; border: 2px solid saddlebrown">
    <p>DESC:${e.desc} </p>
    <div height:1000px; width:350px; overflow:hidden; object-fit:cover>
    <img src="${e.img}" alt="img"></div>
    <h3>PRICE:"${e.price}" </h3>
    <button onclick="addjewellery(${e.price})">ADD</button>
    <button onclick="removejewellery(${e.price})">REMOVE</button></div>
    `
}).join("")
let price=0;
let quantity=0;
let cart=document.getElementById("cart");
window.addjewellery=(p)=>{
    price=price+p;
    if(price<0){
        cart.innerHTML="<h1>EMPTY CART</h1>"
    }else{
        cart.innerHTML=price;
    }
}
window.removejewellery=(p)=>{
    price=price-p;
    if(price<0){
        cart.innerHTML="<h1>EMPTY CART</h1>"
    }
    else{
        cart.innerHTML=price;
    }
}