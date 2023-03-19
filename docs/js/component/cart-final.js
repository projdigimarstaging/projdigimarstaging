class CartFinalComponent extends Component{

    onConnected(){
        NOWA.init().then(()=>{
            this.render();
        })
    }

    deleteCart(){
        const store = Store.get();
        delete store.cart;
        Store.store();
        document.querySelector("comp-cart-list").render();
    }

    shopAgain(){
        window.location.href = "/";
    }

    buyNow(){
        const store = Store.get();
        const cartOrderInfos = Object.entries(store.cart).map((item)=>item[1]);
        const nowa = NOWA.data[0]        

        delete store.cart;
        Store.store();

        document.querySelector('comp-cart-list').render();
        document.querySelector('comp-cart').render();
        window.open(cartOrderWAGenerator(cartOrderInfos, nowa), "_blank")
       
    }

    template(){
        if(!NOWA.data)
            return ` <h4 class="text-center text-pink">Loading data...</h4>`
        
        
        const total = Object.entries(Store.get().cart).map((item)=>{
            const key = item[0];
            const cartInfo = item[1];
            return cartInfo.product.discountNominal? cartInfo.product.discountNominal * cartInfo.jumlah : cartInfo.product.price * cartInfo.jumlah;
        }).reduce((i, j)=>{return i+j}, 0);

        return `
        <div class="row pt-lg-5">
            <div class="col-lg-12 col-md-12 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">
                            <a class="text-pink">Total</a>
                        </h5>
                        <br />
                        <div>
                            <p>Harga Total : <b>${currencyFormatter.format(total)}</b></p>
                            <button type="button" class="btn btn-secondary btn-bg bg-pink"
                                onClick="document.querySelector('#${this.id}').buyNow()">
                                beli sekarang
                            </button>
                            <button type="button" class="btn btn-secondary btn-bg bg-pink"
                                onClick="document.querySelector('#${this.id}').shopAgain()">
                                belanja lagi
                            </button>
                            <button type="button" class="btn btn-secondary btn-bg bg-pink"
                                data-toggle="modal" data-target="#cart-final-modal">
                                <i class="fa fa-trash">
                                </i>
                                hapus keranjang
                            </button>
                            
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="cart-final-modal" tabindex="-1" role="dialog" aria-labelledby="cartFinalModal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="cartFinalModal">Konfirmasi Hapus Keranjang</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Apakah anda yakin ingin <b>menghapus</b> item <b>keranjang</b> anda?
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                                        <button type="button" class="btn btn-success" data-dismiss="modal" onClick="document.querySelector('#${this.id}').deleteCart()">Konfirmasi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define("comp-cart-final", CartFinalComponent);