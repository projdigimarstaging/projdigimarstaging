class Category extends BaseModel{
    static data = [
        {
            "id":0,
            "displayName":"All"
        },
        {
            "id":1,
            "displayName":"Lipstik"
        },
        {
            "id":2,
            "displayName":"Bedak"
        }
    ]


    static async init(){
        if(!Category.data)
            Category.data = await BaseModel.init("db/categories.json")
    }
}