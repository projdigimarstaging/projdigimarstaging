function templateProductCardContainer(state){
    let {product} = state;
    return `
    <div class="col-lg-4 col-md-6 mb-4" id="${product.codeMaster}">
        ${templateProductCardVariant(state)}
    </div>
    ` 
}

function templateProductCardVariant(state){
    let {product, variant, no_wa} = state
    return `
    <div class="card h-100">
        <a href="${productOrderWaGenerator(product.variant[variant], no_wa)}" target="_blank">
            <img class="card-img-top" src="${product.variant[variant].img}" alt="Item 1">
        </a>
        <div class="card-body">
            <h5 class="card-title">
                <a class="text-pink" href="${productOrderWaGenerator(product.variant[variant], no_wa)}" target="_blank">${product.variant[variant].displayName}</a>
            </h5>
            ${(()=>{
                    if(product.variant[variant].discountNominal != undefined && product.variant[variant].discountNominal > 0)
                        return `<p><b><strike>${currencyFormatter.format(product.variant[variant].price)}</strike> ${currencyFormatter.format(product.variant[variant].discountNominal)}</b></p>` 
                    return `<p><b>${currencyFormatter.format(product.variant[variant].price)}</b></p>`
                })()
            }
            <div>
            ${(()=>{
                if(product.variant.length>1)
                    return templateProductCardVariantDropDown(state);
            })()}
            ${(()=>{
                return templateProductCardVariantJumlah(state);
            })()}
            </div>
            <div>
                <br/>
                <a class="text-pink" data-toggle="collapse" href="${`#${product.variant[variant].variantName}-desc`}" role="button" aria-expanded="false" aria-controls="collapseExample">
                  deskripsi
                </a>
                <div class="collapse" id="${`${product.variant[variant].variantName}-desc`}">
                    <p class="card-text">${product.variant[variant].description}</p>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
    </div>`
}

function templateProductCardVariantDropDown(state){
    let {product} = state
    let stateJSON = JSON.stringify(state);
    return `
    <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
        <div class="btn-group" role="group">
            <button id="${product.codeMaster}-variant-dropdown" type="button" class="btn bg-pink text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                variant
            </button>
            <div class="dropdown-menu" aria-labelledby="${product.masterCode}-variant-dropdown">
                ${(()=>{
                    return product.variant.map((item, index)=>{
                        return `<a class="dropdown-item" onClick='ProductListController.changeVariant(${stateJSON}, ${index})'>${item.variantName}</a>`
                    }).join("\n")
                })()}
            </div>
        </div>
    </div>`
}

function templateProductCardVariantJumlah(state){
    return `
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control col-xs-4" aria-label="Amount (to the nearest dollar)">
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>

    `
}