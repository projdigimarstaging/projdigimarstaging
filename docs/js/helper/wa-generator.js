function productOrderWaGenerator(product, no_wa, jumlah){
    let str = `|Order Product|
---------------
kode: ${product.code}
nama: ${product.displayName}
jumlah : ${jumlah}
harga satuan: ${currencyFormatter.format(product.price)}
${(()=>{
    if(product.discountNominal)
        return `diskon: ${currencyFormatter.format(product.price - product.discountNominal)}`
    return ''
})()}
sub total : ${(()=>{
    if(product.discountNominal)
        return currencyFormatter.format(product.discountNominal * jumlah)
    return currencyFormatter.format(product.price * jumlah) 
})()}

--------------
grand total : ${(()=>{
    if(product.discountNominal)
        return currencyFormatter.format(product.discountNominal* jumlah) 
    return currencyFormatter.format(product.price* jumlah) 
})()}
HARGA YANG TERTERA BELUM TERMASUK ONGKIR!!
`;

    return `http://wa.me/${no_wa}?text=${encodeURIComponent(str)}`;
}


function cartOrderWAGenerator(cartOrderInfos, no_wa){
    let str = `|Order Products|
    ${(()=>{
        return cartOrderInfos.map((cartInfo)=>{
            return `
---------------
code : ${cartInfo.product.code}
nama : ${cartInfo.product.displayName}
jumlah : ${cartInfo.jumlah}
harga satuan : ${currencyFormatter.format(cartInfo.product.price)}
${cartInfo.product.discountNominal? `diskon satuan : ${currencyFormatter.format(cartInfo.product.price - cartInfo.product.discountNominal)}`:''}
sub total : ${cartInfo.product.discountNominal ? currencyFormatter.format(cartInfo.product.discountNominal * cartInfo.jumlah) : currencyFormatter.format(cartInfo.product.price * cartInfo.jumlah)}`
        })
    })().join("")}
---------------
grand total :  ${(()=>{
        return currencyFormatter.format(cartOrderInfos.map((cartInfo)=>{
            return cartInfo.product.discountNominal? cartInfo.product.discountNominal * cartInfo.jumlah : cartInfo.product.price * cartInfo.jumlah;
        }).reduce((i, j)=>{return i + j}, 0))
    })()}
HARGA YANG TERTERA BELUM TERMASUK ONGKIR!!
    `

    return `http://wa.me/${no_wa}?text=${encodeURIComponent(str)}`;
 
}