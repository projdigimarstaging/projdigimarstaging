class Store{
    static data = {}

    static sync(){
        if(localStorage.getItem('store') == null)
            Store.store()
        Store.data = JSON.parse(localStorage.getItem('store'))
    }

    static store(){
        localStorage.setItem("store", JSON.stringify(Store.data));
    }

    static get(){
        Store.sync();
        return Store.data;
    }

    static set(data){
        Store.data = data;
        Store.store();
    }

    static delete(name){
        let store = Store.get();
        delete store[name];
        Store.store();
    }
}