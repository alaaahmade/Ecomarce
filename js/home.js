const cartNum =document.getElementById("cartNum")

let cartArr = []

if (localStorage.getItem("cart")) {
    let productA = JSON.parse(localStorage.getItem("cart"));
    cartArr = [...productA];
}
const getTotalProducts = ()=>{
    let num = cartArr.length
    cartNum.textContent = num
    let price = 0;
    cartArr.forEach((pro)=>{
        price+= pro.price
    })
    totalPrice.textContent = price
}
getTotalProducts()

