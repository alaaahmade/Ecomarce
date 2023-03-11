const shop = document.getElementById("shop");
const pages = document.getElementById("pages");

shop.addEventListener("click",()=>{
    if(pages.style.display=="flex"){
        pages.style.display="none"
    }else{
        pages.style.display="flex"
    }
})

