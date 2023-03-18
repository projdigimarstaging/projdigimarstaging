function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

class Store{
    static data = {}

    static sync(){
        if(document.cookie == "")
            Store.store()
        Store.data = JSON.parse(getCookie('store'))
    }

    static store(){
        setCookie("store", JSON.stringify(Store.data), 7);
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