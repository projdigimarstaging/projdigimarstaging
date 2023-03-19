class NOWA extends BaseModel{
    static data = null

    static async init(){
        if(NOWA.data == null)
        NOWA.data = await (await fetch('db/wa.json', {cache: "reload"})).json()
    }
}