class CartEntryComponent extends Component{
    dec(){
        const store = Store.get();
        const cart = store.cart[this.product.code];

        if(cart.jumlah > 1){
            this.jumlah--;
            cart.jumlah = this.jumlah;
            store.cart[this.product.code] = cart;
            Store.store();
            this.render();
        } else {
            this.trash();
        }
    }

    inc(){
        const store = Store.get();
        const cart = store.cart[this.product.code];

        this.jumlah++;
        cart.jumlah = this.jumlah;
        Store.store();
        this.render();
    }

    trash(){
        this.querySelector("#btn-delete").click();
        document.querySelector("comp-cart").render();
    }

    trashConfirm(){
        const store = Store.get();
        delete store.cart[this.product.code];
        Store.store();
        document.querySelector("comp-cart-list").render();
        //const cart = store.cart[this.product.code];
    }
    
    template(){
        console.log(this.attributes)
        return `
        <div class="card h-100">
        <a target="_blank">
            <img class="card-img-top" src="${this.img[0]}" alt="Item 1">
        </a>
        <div class="card-body">
            <h5 class="card-title">
                <a class="text-pink"
                    target="_blank">${this.product.displayName}</a>
            </h5>
            <br />
            <div>
                <p>Harga Satuan : <b>${currencyFormatter.format(this.product.price)}</b></br>
                ${(()=>{
                    if(this.product.discountNominal)
                        return `Diskon Satuan: <b>${currencyFormatter.format(this.product.price - this.product.discountNominal)}</b></br>`
                    return `Diskon Satuan : <b>${currencyFormatter.format(0)}</b><br/>`
                })()}
                Jumlah : <b>${this.jumlah}</b></br>
                Total : <b>${(()=>{
                    if(this.product.discountNominal)
                        return currencyFormatter.format(this.product.discountNominal * this.jumlah);
                    return currencyFormatter.format(this.product.price * this.jumlah);
                })()}</b></p>
                <div class="btn-group" role="group" aria-label="jumlah-product">
                    <button type="button" class="btn btn-secondary btn-bg bg-pink"
                        onClick="document.querySelector('#${this.id}').dec()">-</button>
                    <button type="button"
                        class="btn btn-secondary btn-bg bg-white text-dark disabled">${this.jumlah}</button>
                    <button type="button" class="btn btn-secondary btn-bg bg-pink"
                        onClick="document.querySelector('#${this.id}').inc()">+</button>
                    
                </div>
                <button id="btn-delete" type="button" class="btn btn-secondary btn-bg bg-pink"
                data-toggle="modal" data-target="#${this.product.code +"-modal"}">
                    <i class="fa fa-trash">
                    </i>
                    hapus
                </button>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="${this.product.code + "-modal"}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Konfirmasi Hapus Item</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Apakah anda ingin <b>menghapus</b> item <b>${this.product.displayName}</b> dari keranjang anda?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                <button type="button" class="btn btn-success" data-dismiss="modal" onClick="document.querySelector('#${this.id}').trashConfirm()">Konfirmasi</button>
            </div>
            </div>
        </div>
        </div>
    </div>
        `
    }
}

customElements.define("comp-cart-entry", CartEntryComponent);