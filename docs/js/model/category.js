class Category extends BaseModel{
    static data = null

    static async init(){
        if(Category.data == null)
            Category.data = await (await fetch('db/categories.json', {cache: "reload"})).json()
    }
}