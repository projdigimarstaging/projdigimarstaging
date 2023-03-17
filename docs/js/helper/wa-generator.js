function productOrderWaGenerator(product, no_wa){
    let str = `|Order Product|
---------------
kode: ${product.code}
nama: ${product.displayName}
jumlah : 1
harga satuan: ${currencyFormatter.format(product.price)}
${(()=>{
    if(product.discountNominal)
        return `diskon: ${currencyFormatter.format(product.price - product.discountNominal)}`
    return ''
})()}
sub total : ${(()=>{
    if(product.discountNominal)
        return currencyFormatter.format(product.discountNominal)
    return currencyFormatter.format(product.price)
})()}

--------------
Grand total : ${(()=>{
    if(product.discountNominal)
        return currencyFormatter.format(product.discountNominal)
    return currencyFormatter.format(product.price)
})()}`;

    return link = `http://wa.me/${no_wa}?text=${encodeURIComponent(str)}`;
}