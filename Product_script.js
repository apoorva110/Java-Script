import cloth from "./ourproduct.js";
console.log(cloth)

let prod=document.getElementById("prod")
console.log(prod)

prod.innerHTML=product.map((e)=>{
    return`
    <div style="height: 200px; width:200px; border:2px solid black;">
            <p>DESC:${obj.desc} </p>
            <img src="${obj.desc}" alt="img">
    <h3>PRICE:${obj.price} </h3>
    <BUTTON>add</BUTTON>
    <button>REMOVE</button>
    </div>
    `
}).join("")
let price=0;

// let p=0;

// window.ADDPRICE=(price)=>{
//     p=p+price;
//     alert(p)
// }
// window.REMOVEPRICE=(price)=>{
//     p=p-price;
//     alert(p)
// }