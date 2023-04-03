class ProductComponent extends Component{
    static GRANDPARENT_DESC_HIDE_CLASS = "col-lg-4 col-md-6 mb-4";
    static GRANDPARENT_DESC_SHOW_CLASS = "col-lg-8 col-md-8 mb-4 ";

    constructor(state){
        super()
    }

    onCreateState(){
        this.id = this.product.codeMaster + "-card"
        this.variant = 0
        this.jumlah = 1
        this.showdesc = false
    }

    changeVariant(variant){
        this.variant = variant;
        this.render();
    }

    inc(){
        this.jumlah++;
        this.render();
    }

    dec(){
        if(this.jumlah>1)
            this.jumlah--;
        this.render()
    }

    buy(){
        window.open(productOrderWaGenerator(this.product.variant[this.variant], this.no_wa, this.jumlah), '_blank')
    }

    addToCart(){
        let store = Store.get()
        if(!store.cart)
            store.cart = {}

        const cartInfo = {
            codeMaster:this.product.codeMaster,
            variant:this.variant,
            product:this.product.variant[this.variant],
            jumlah:this.jumlah,
            img:this.product.img
        }

        console.log(cartInfo.img)

        if(!store.cart[cartInfo.product.code])
            store.cart[cartInfo.product.code] = cartInfo
        else
            store.cart[cartInfo.product.code].jumlah += this.jumlah;

        console.log(store.cart)
    
        Store.set(store)
        this.jumlah = 1;
        this.render()

        for(let cart of document.getElementsByTagName("comp-cart")){
            cart.render()
        }
    }

    toggleDesc(){
        this.showdesc = !this.showdesc;
        super.parentNode.className = this.showdesc ? ProductComponent.GRANDPARENT_DESC_SHOW_CLASS : ProductComponent.GRANDPARENT_DESC_HIDE_CLASS;
        this.render()
    }

    template(){
        return `
            <div class="card h-100">
            <a href="${productOrderWaGenerator(this.product.variant[this.variant], this.no_wa, this.jumlah)}" target="_blank">
                ${(()=>{
                    if(this.product.img.length > 1)
                        return `
                            <comp-carousel caroselid="${this.product.codeMaster}-carousel" imgclass="card-img-top" dataimg='${JSON.stringify(this.product.img)}' caroselstyle="margin-top:0!important; margin-bottom:0!important;"></com-carousel>
                        `
                    else return `<img class="card-img-top" src="${this.product.img[0]}" alt="Item 1"></img>`
                })()}
            </a>
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-deeppink" href="${productOrderWaGenerator(this.product.variant[this.variant], this.no_wa, this.jumlah)}" target="_blank">${this.product.variant[this.variant].displayName}</a>
                </h5>
                ${(()=>{
                        if(this.product.variant[this.variant].discountNominal != undefined && this.product.variant[this.variant].discountNominal > 0)
                            return `<p><b><strike>${currencyFormatter.format(this.product.variant[this.variant].price)}</strike> ${currencyFormatter.format(this.product.variant[this.variant].discountNominal)}</b></p>` 
                        return `<p><b>${currencyFormatter.format(this.product.variant[this.variant].price)}</b></p>`
                    })()
                }
                <div>
                ${(()=>{
                    //if(this.product.variant.length>1)
                        return `<div class="btn-group form-inline" role="group" aria-label="Button group with nested dropdown">
                        <div class="btn-group" role="group">
                            <button id="${this.product.codeMaster}-variant-dropdown" type="button" class="btn btn-sm bg-pink text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                variant
                            </button>
                            <div class="dropdown-menu" aria-labelledby="${this.product.codeMaster}-variant-dropdown">
                                ${(()=>{
                                    return this.product.variant.map((item, index)=>{
                                        return `<a class="dropdown-item" onclick="document.querySelector('#${this.id}').changeVariant(${index})">${item.variantName}</a>`
                                    }).join("\n")
                                })()}
                            </div>
                        </div>
                    </div>`
                    /*else return `<div class="btn-group form-inline" role="group" aria-label="Button group with nested dropdown">
                        <button id="${this.product.codeMaster}-variant-dropdown" type="button" class="btn btn-sm btn-secondary text-white dropdown-toggle">
                                    variant
                        </button>
                    </div>`*/
                })()}
                    <div class="btn-group" role="group" aria-label="jumlah-product">
                        <button type="button" class="btn btn-secondary btn-sm bg-pink" onClick="document.querySelector('#${this.id}').dec()">-</button>
                        <button type="button" class="btn btn-secondary btn-sm bg-white text-dark disabled">${this.jumlah}</button>
                        <button type="button" class="btn btn-secondary btn-sm bg-pink" onClick="document.querySelector('#${this.id}').inc()">+</button>
                    </div>   
                </div>

                <div>
                    <br/>
                    <a class="text-pink" data-toggle="collapse" onClick="document.querySelector('#${this.id}').toggleDesc()" role="button" aria-expanded="false" aria-controls="collapseExample">
                    deskripsi
                    </a>
                    <div class="${(()=>{return this.showdesc ? "collapse show" : "collapse" })()}" id="${`${this.product.variant[this.variant].code}-desc`}">
                        <p class="card-text">${this.product.variant[this.variant].description}</p>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-sm bg-deeppink text-white" onClick="document.querySelector('#${this.id}').buy()">Beli Sekarang</button>
                <button type="button" class="btn btn-sm bg-deeppink text-white" onClick="document.querySelector('#${this.id}').addToCart()">
                    <i class="fa fa-cart-plus">
                    </i>
                        ${(()=>{
                            const store = Store.get();
                            if(!store.cart)
                                return ``
                            let product = this.product.variant[this.variant];
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
