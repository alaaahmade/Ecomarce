
const products = document.getElementById("products");
const cartNum =document.getElementById("cartNum");
const category = document.getElementById("category");
const close = document.getElementById("close")
const proNam = document.getElementById("name");
const proPrice = document.getElementById("price");
const ProDescription = document.getElementById("des");
const AddBtn  = document.getElementById("addition");
const img = document.getElementById("img");
const AddSection = document.getElementById("secAdd");
const AdditionBtn = document.getElementById("AdditionBtn");
const edit = document.getElementById("save")
AdditionBtn.addEventListener("click",()=>{

    AddSection.style.display = "block";
})

close.addEventListener("click",()=>{
    AddSection.style.display = "none";
})
let productArr = [];
if(localStorage.getItem("products")){
    let products = JSON.parse(localStorage.getItem("products"));
    productArr = [...products];
}
let sellerArr = []
if(localStorage.getItem("myProducts")){
    sellerArr = JSON.parse(localStorage.getItem("myProducts"))
    productArr = [...productArr,...sellerArr]
}

let cartArr = [];
if(localStorage.getItem("cart")){
    let locale = JSON.parse(localStorage.getItem("cart"));
    cartArr = [...locale];
}


let MyProductArr = []
if(localStorage.getItem("myProducts")){
    let locale = JSON.parse(localStorage.getItem("myProducts"));
    MyProductArr = [...locale];
}





AddBtn.addEventListener("click",(AddBtn)=>{
    AddBtn.preventDefault();
    if(proNam.value.trim() == "" || proPrice.value.trim() == ""|| ProDescription.value.trim() == "" ){
        return;
    }else{
        AddProductLocal();
    }
})
const AddProductLocal = ()=>{
    const product = 
        {
            id : Date.now(),
            name :proNam.value ,
            price : proPrice.value,
            category : category.value,
            img : img.value,
            disc : ProDescription.value
        };
        proNam.value ='';
        proPrice.value='';
        category.value = '';
        img.value='';
        ProDescription.value='';
        MyProductArr.push(product);
        localStorage.setItem("myProducts",JSON.stringify(MyProductArr));
        AddToPage(MyProductArr)

}



const AddToPage = (arr)=>{
    products.innerHTML = ''
    arr.forEach((ele)=>{
        const item = document.createElement("div");
        item.setAttribute("dataId",ele.id)
        item.classList.add("item");
        const img = document.createElement("img");
        img.src = ele.img;
        const divp = document.createElement("div");
        const title = document.createElement("h3");
        title.textContent = ele.name;
        const price = document.createElement("p");
        price.textContent = "$";
        const num = document.createElement("span");
        num.textContent = ele.price;
        price.appendChild(num);
        divp.appendChild(title);
        divp.appendChild(price)
        const description = document.createElement("p");
        description.classList.add("desP");
        description.textContent = ele.disc;
        const RemoveButton =document.createElement("button");
        RemoveButton.id = "remove";
        RemoveButton.textContent = "Remove Product";
        const EditButton =document.createElement("button");
        EditButton.id = "Edit";
        EditButton.textContent = "Edit Product";
        item.appendChild(img);
        item.appendChild(divp);
        item.appendChild(description);
        item.appendChild(RemoveButton);
        item.appendChild(EditButton)
        products.appendChild(item);
        RemoveButton.addEventListener("click",()=>{
            remove(ele.id)
        })
        EditButton.addEventListener("click",()=>{
            AddSection.style.display = "block";
            edit.style.display = "block";
            Edit(ele)

        })
    })
}
AddToPage(MyProductArr);



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

const remove=(id)=>{
    productArr = productArr.filter((ele)=>ele.id != id)
    localStorage.setItem("products",JSON.stringify(productArr))
    MyProductArr = MyProductArr.filter((ele)=>ele.id != id)
    localStorage.setItem("myProducts",JSON.stringify(MyProductArr))
    AddToPage(MyProductArr)
}

const Edit = (e)=>{
    AddSection.lastElementChild.lastElementChild.style.display = "block";
    let id = e.id;
    proNam.value = e.name ;
    proPrice.value = e.price ;
    category.value = e.category;
    img.value = e.img;
    ProDescription.value = e.disc;
    AddSection.style.display = "block";
    edit.addEventListener("click",(edit)=>{
        edit.preventDefault()
        save(e,id);
    })
    };


const save =(e,id)=>{
    MyProductArr.forEach((pro)=>{
        if(pro.id = id){
            pro.name = proNam.value;
            pro.price = proPrice.value;
            pro.category = category.value;
            pro.img = img.value;
            pro.disc = ProDescription.value;

        }
    })
    AddSection.style.display = "none";
    localStorage.setItem("myProducts",JSON.stringify(MyProductArr))
    AddToPage(MyProductArr);

}