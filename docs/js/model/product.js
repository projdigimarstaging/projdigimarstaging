class Product extends BaseModel{
    static data = null;
    static async init(){
        if(!Product.data)
            Product.data = await BaseModel.init("db/products.json")
    }
}