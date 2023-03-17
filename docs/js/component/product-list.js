class ProdcutListComponent extends Component
{

    constructor(){
        super()
    }

    onConnected(){
        this.id = "productlist-comp"
    }

    template(){
        let no_wa = 6281317980678
        console.log(this.choosenCategory)
        if(this.choosenCategory > 0)
            var productInCategory = Product.data.filter((product) => product.category == this.choosenCategory);
        else
            var productInCategory = Product.data

        if(productInCategory.length > 0)
            return `
            <div class="row pt-lg-5" id="product-container">
                    ${(()=>{
                        let str =  productInCategory.map((product)=>{
                            return `<div class="col-lg-4 col-md-6 mb-4">
                                        <comp-product product='${JSON.stringify(product)}' no_wa="${JSON.stringify(no_wa)}"></comp-product>
                                    </div>`
                        }).join("")
                        console.log(str)
                        return str
                    })()}
            </div>
            `
        else 
            return `
                <h4 class="text-center text-pink">Tidak Ada Item</h4>
            `
    }

    changeCategory(category){
        this.choosenCategory = category;
        this.render()
    }
}

customElements.define("comp-product-list", ProdcutListComponent)