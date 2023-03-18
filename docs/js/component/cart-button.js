class CartButtonComponent extends Component{

    template(){
        const store = Store.get();
        const cart = store.cart;
        const length = cart ? Object.entries(cart).length : 0;
        return `
            <a class="btn ml-lg-3 bg-pink text-white" id="comp-cart" href="cart.html">
                <i class="fa fa-cart-plus"></i> 
                Cart
                <sup>
                  <span class="badge">${(()=>{
                    if(length<1)
                        return ``
                    return length;
                  })()}</span>
                </sup>
            </a>
        `
    }
}

customElements.define('comp-cart', CartButtonComponent)