
$(document).ready(async function(){
    await Product.init();
    let container = document.querySelector("#product-container");

    container.innerHTML = ""

    let productlist = document.createElement("comp-product-list")
    container.appendChild(productlist)
})
