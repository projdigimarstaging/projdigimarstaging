class Component extends HTMLElement{
    constructor(){
        super()
        this.state = {}
        let att = []
        for (var i = 0; i < this.attributes.length; i++) {
            var attrib = this.attributes[i];
            this.state[attrib.name] = JSON.parse(attrib.value)
            att.push(attrib)
        }
        att.forEach((item)=>{
            this.attributes.removeNamedItem(item.name)
        })

        console.log(this.state)
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
        console.log(this)
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

    }
}

