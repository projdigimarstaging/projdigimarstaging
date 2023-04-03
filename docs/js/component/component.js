function tryParseJSONObject (jsonString){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return jsonString;
};

class Component extends HTMLElement{
    constructor(){
        super()
        let att = []
        for (var i = 0; i < this.attributes.length; i++) {
            var attrib = this.attributes[i];
            if(attrib.name == "id")
                continue
            this[attrib.name] = tryParseJSONObject(attrib.value)
            att.push(attrib)
        }
        /*att.forEach((item)=>{
            this.attributes.removeNamedItem(item.name)
        })*/

        this.onCreateState()
    }

    static create(component, state){
        component = document.createElement(component)
        component.createState(state)
        return component;
    }

    onConnected(){

    }

    onRender(){

    }

    onCreateState(){

    }

    connectedCallback(){
        this.onConnected()
        this.render()
    }

    createState(state){
        this.state = state;
        this.onCreateState();
    }

    render(){
        this.onRender()
        const template = new DOMParser().parseFromString(this.template(), "text/html")
        if(this.firstChild)
            this.firstChild.replaceWith(template.body.firstChild)
        else
            this.appendChild(template.body.firstChild)
    }

    template(){
        return ``
    }
}

