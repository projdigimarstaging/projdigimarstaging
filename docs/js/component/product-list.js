class ProdcutListComponent extends Component
{
    template(){
        let choosenCategory = 1
        let no_wa = 6281317980678
        let productInCategory = Product.data.filter((product) => product.category == choosenCategory);
        return `
        <div class="row pt-lg-5" id="product-container">
            ${(()=>{
                console.log("")
                return productInCategory.map((product)=>{
                    return `<div class="col-lg-4 col-md-6 mb-4">
                                <comp-product product='${JSON.stringify(product)}' no_wa="${JSON.stringify(no_wa)}"></comp-product>
                            </div>`
                }).join("")
            })()}
        </div>
        `
    }
}

customElements.define("comp-product-list", ProdcutListComponent)