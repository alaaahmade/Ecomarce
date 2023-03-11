

let cartArr = []
if(localStorage.getItem("cart")){
    let locale = JSON.parse(localStorage.getItem("cart"));
    cartArr = [...locale];
}

const getTotalProducts = ()=>{
    let num = cartArr.length;
    cartNum.textContent = num;
    let price = 0;
    cartArr.forEach((pro)=>{
        price+= pro.price;
    })
    totalPrice.textContent = price;
}
getTotalProducts()
