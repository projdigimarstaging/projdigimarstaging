class Product extends BaseModel{
    static data = [
        {
            "codeMaster": "hp_juara",
            "category": 1,
            "variant": [
                {
                    "code": "hp_juara_kuning",
                    "variantName": "Kuning",
                    "displayName": "HP JUARA Kuning",
                    "img": "img/item-1.jpeg",
                    "price": 54000,
                    "discountNominal": 44000,
                    "description": "lorem ipsum ...."
                },
                {
                    "code": "hp_juara_pink",
                    "variantName": "Pink",
                    "displayName": "HP JUARA Pink",
                    "img": "img/item-1.jpeg",
                    "price": 56000,
                    "discountNominal": 47000,
                    "description": "lorem ipsum ...."
                }
            ]
        },
        {
            "codeMaster": "paket_belanja",
            "category": 1,
            "variant": [
                {
                    "code": "paket_belanja_lengkap",
                    "variantName": "lengkap",
                    "displayName": "Paket Belanja Lengkap",
                    "img": "img/item-2.jpeg",
                    "price": 200000,
                    "description": "lorem ipsum ...."
                },
                {
                    "code": "paket_belanja_1",
                    "variantName":"paket 1",
                    "displayName": "Paket Belanja 1",
                    "img": "img/item-2.jpeg",
                    "price": 120000,
                    "discountNominal":100000,
                    "description": "lorem ipsum ...."
                }
            ]
        },
        {
            "codeMaster": "sepatu_mantab",
            "category": 2,
            "variant": [
                {
                    "code": "sepatu_mantab_laki",
                    "variantName": "Laki",
                    "displayName": "Sepatu Mantab Laki",
                    "img": "img/item-3.jpeg",
                    "price": 20000000,
                    "description": "Ini sepatu laki"
                },
                {
                    "code": "sepatu_mantab_laki_bingits",
                    "variantName":"Laki Bingits",
                    "displayName": "Sepatu Mantab Laki Bingits",
                    "img": "img/item-1.jpeg",
                    "price": 120000000,
                    "discountNominal":100000000,
                    "description": "Ini Sepatu Laki Bingits"
                }
            ]
        }
    ]
}