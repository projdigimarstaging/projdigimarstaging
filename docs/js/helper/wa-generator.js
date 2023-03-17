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
Grand total : ${(()=>{
    if(product.discountNominal)
        return currencyFormatter.format(product.discountNominal* jumlah) 
    return currencyFormatter.format(product.price* jumlah) 
})()}`;

    return link = `http://wa.me/${no_wa}?text=${encodeURIComponent(str)}`;
}