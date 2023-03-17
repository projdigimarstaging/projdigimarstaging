class ProductComponent extends Component{
    constructor(state){
        super()
    }

    onCreateState(){
        this.id = this.state.product.codeMaster + "-card"
        this.state.variant = 0
    }

    changeVariant(variant){
        this.state.variant = variant;
        this.render();
    }

    template(){
        return `
            <div class="card h-100">
            <a href="${productOrderWaGenerator(this.state.product.variant[this.state.variant], this.state.no_wa)}" target="_blank">
                <img class="card-img-top" src="${this.state.product.variant[this.state.variant].img}" alt="Item 1">
            </a>
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-pink" href="${productOrderWaGenerator(this.state.product.variant[this.state.variant], this.state.no_wa)}" target="_blank">${this.state.product.variant[this.state.variant].displayName}</a>
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
                        return `<div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <div class="btn-group" role="group">
                            <button id="${this.state.product.codeMaster}-variant-dropdown" type="button" class="btn bg-pink text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
    `
    }
}

customElements.define("comp-product", ProductComponent)
