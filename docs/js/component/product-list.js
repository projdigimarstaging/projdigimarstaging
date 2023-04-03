class ProdcutListComponent extends Component
{

    constructor(){
        super()
    }

    onConnected(){
        Product.init().then(()=>{
            this.render();
        })

        NOWA.init().then(()=>{
            this.render();
        })
    }

    template(){
        if(Product.data == null || NOWA.data == null)
            return `<h4 class="text-center text-pink">Loading Database...</h4>`
        let no_wa = parseInt(NOWA.data[0])//6281317980678
        if(this.choosenCategory > 0)
            var productInCategory = Product.data.filter((product) => product.category == this.choosenCategory);
        else
            var productInCategory = Product.data

        if(productInCategory.length > 0)
            return `
            <div class="row pt-lg-5" id="product-container">
                    ${(()=>{
                        return productInCategory.map((product)=>{
                            return `<div class="col-lg-4 col-md-6 mb-4">
                                        <comp-product product='${JSON.stringify(product)}' no_wa="${JSON.stringify(no_wa)}"></comp-product>
                                    </div>`
                        }).join("")
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