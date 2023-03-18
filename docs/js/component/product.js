class ProductComponent extends Component{
    constructor(state){
        super()
    }

    onCreateState(){
        this.id = this.state.product.codeMaster + "-card"
        this.state.variant = 0
        this.state.jumlah = 1
    }

    changeVariant(variant){
        this.state.variant = variant;
        this.render();
    }

    inc(){
        this.state.jumlah++;
        this.render();
    }

    dec(){
        if(this.state.jumlah>1)
            this.state.jumlah--;
        this.render()
    }

    buy(){
        window.open(productOrderWaGenerator(this.state.product.variant[this.state.variant], this.state.no_wa, this.state.jumlah), '_blank')
    }

    addToCart(){
        let store = Store.get()
        if(!store.cart)
            store.cart = {}
        const product = this.state.product.variant[this.state.variant]
        if(!store.cart[product.code])
            store.cart[product.code] = {
                product:product,
                jumlah:this.state.jumlah
            }
        else
            store.cart[product.code].jumlah += this.state.jumlah;
        
        Store.set(store)
        this.state.jumlah = 1;
        this.render()

        for(let cart of document.getElementsByTagName("comp-cart")){
            cart.render()
        }
    }

    template(){
        return `
            <div class="card h-100">
            <a href="${productOrderWaGenerator(this.state.product.variant[this.state.variant], this.state.no_wa, this.state.jumlah)}" target="_blank">
                <img class="card-img-top" src="${this.state.product.variant[this.state.variant].img}" alt="Item 1">
            </a>
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-pink" href="${productOrderWaGenerator(this.state.product.variant[this.state.variant], this.state.no_wa, this.state.jumlah)}" target="_blank">${this.state.product.variant[this.state.variant].displayName}</a>
                </h5>
                ${(()=>{
                        if(this.state.product.variant[this.state.variant].discountNominal != undefined && this.state.product.variant[this.state.variant].discountNominal > 0)
                            return `<p><b><strike>${currencyFormatter.format(this.state.product.variant[this.state.variant].price)}</strike> ${currencyFormatter.format(this.state.product.variant[this.state.variant].discountNominal)}</b></p>` 
                        return `<p><b>${currencyFormatter.format(this.state.product.variant[this.state.variant].price)}</b></p>`
                    })()
                }
                <div>
                ${(()=>{
                    if(this.state.product.variant.length>1)
                        return `<div class="btn-group form-inline" role="group" aria-label="Button group with nested dropdown">
                        <div class="btn-group" role="group">
                            <button id="${this.state.product.codeMaster}-variant-dropdown" type="button" class="btn btn-sm bg-pink text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                variant
                            </button>
                            <div class="dropdown-menu" aria-labelledby="${this.state.product.codeMaster}-variant-dropdown">
                                ${(()=>{
                                    return this.state.product.variant.map((item, index)=>{
                                        return `<a class="dropdown-item" onclick="document.querySelector('#${this.id}').changeVariant(${index})">${item.variantName}</a>`
                                    }).join("\n")
                                })()}
                            </div>
                        </div>
                    </div>`
                })()}
                    <div class="btn-group" role="group" aria-label="jumlah-product">
                        <button type="button" class="btn btn-secondary btn-sm bg-pink" onClick="document.querySelector('#${this.id}').dec()">-</button>
                        <button type="button" class="btn btn-secondary btn-sm bg-white text-dark disabled">${this.state.jumlah}</button>
                        <button type="button" class="btn btn-secondary btn-sm bg-pink" onClick="document.querySelector('#${this.id}').inc()">+</button>
                    </div>   
                </div>

                <div>
                    <br/>
                    <a class="text-pink" data-toggle="collapse" href="${`#${this.state.product.variant[this.state.variant].code}-desc`}" role="button" aria-expanded="false" aria-controls="collapseExample">
                    deskripsi
                    </a>
                    <div class="collapse" id="${`${this.state.product.variant[this.state.variant].code}-desc`}">
                        <p class="card-text">${this.state.product.variant[this.state.variant].description}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-sm bg-pink text-white" onClick="document.querySelector('#${this.id}').buy()">Beli Sekarang</button>
                <button type="button" class="btn btn-sm bg-pink text-white" onClick="document.querySelector('#${this.id}').addToCart()">
                    <i class="fa fa-cart-plus">
                    </i>
                        ${(()=>{
                            const store = Store.get();
                            if(!store.cart)
                                return ``
                            const product = this.state.product.variant[this.state.variant];
                            if(!store.cart.hasOwnProperty(product.code))
                                return ``
                            return `<sup>
                                    <span class="badge">${store.cart[product.code].jumlah}</span>
                                </sup>`
                        })()}
                </button>
            </div>
        </div>
    `
    }
}

customElements.define("comp-product", ProductComponent)
