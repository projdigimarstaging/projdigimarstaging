class Product extends BaseModel{
    static data = null

    static async init(){
        if(Product.data == null)
            Product.data = await (await fetch("db/products.json", {cache: "reload"})).json()
    }
}