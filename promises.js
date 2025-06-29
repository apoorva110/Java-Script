let p=new Promise((accept,reject)=>{
    let car=fetch("https://fakestoreapi.com/products");
    if(car){
        car.then((e)=>{
            accept(e.json());
        })
    }else{
        reject("reject")
    }
})
p.then((e)=>{
    let data=e.products;
    data.map((e)=>{
        console.log(e.id);
    })
})
