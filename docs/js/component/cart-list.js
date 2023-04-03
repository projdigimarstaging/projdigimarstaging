class CartListComponent extends Component
{
    template(){
        const store = Store.get();
        if(!store.cart || Object.entries(store.cart).length < 1)
            return `
            <div class="row">
                <div class="col mb-4 mt-4 align-self-center">
                    <h5 class="text-center text-pink">Tidak ada item di keranjang anda</h5>
                </div>
            </div>
            `
        const cart = store.cart;

        return  `
        <div>
            <div class="row pt-lg-5">
                ${(()=>{
                    return Object.entries(cart).map((item)=>{
                        const index = item[0]
                        const cartInfo = item[1]
                        return `
                        <div class="col-lg-4 col-md-6 mb-4">
                            <comp-cart-entry id="${cartInfo.product.code}" product='${JSON.stringify(cartInfo.product)}' jumlah="${cartInfo.jumlah}" variant="${cartInfo.variant}" img='${JSON.stringify(cartInfo.img)}'></comp-cart-entry>
                        </div>
                        `
                    }).join("")
                })()}
            </div>
            <comp-cart-final id="cart-final"></comp-cart-final>
        </div>
        `
    }
}

customElements.define('comp-cart-list', CartListComponent);