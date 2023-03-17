class BaseModel {
    static async init(resource){
        return (await fetch(resource)).json();
    }
}