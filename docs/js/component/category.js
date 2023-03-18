class CategoryComponent extends Component{
    choosenCategory = 0
    constructor(){
        super()
    }

    onConnected(){
        Category.init().then(()=>{
            this.render();
        })
    }
    
    changeCategory(category){
        this.choosenCategory = category;
        this.render();
        document.querySelector('#productlist-comp').changeCategory(category);
    }

    template(){
        if(Category.data == null)
            return `<div></div>`
        let data = Category.data;
        return `
        <div class="list-group collapse" id="collapse-category">
            ${(()=>{
                return data.map((category, index)=>{
                    if(index == this.choosenCategory)
                        return `<a href="#" class="bg-pink list-group-item active" onclick="(()=>document.querySelector('#${this.id}').changeCategory(${index}))()">${category.displayName}</a>`
                    else
                        return `<a href="#" class="text-pink list-group-item" onclick="(()=>document.querySelector('#${this.id}').changeCategory(${index}))()">${category.displayName}</a>`
                }).join('')
            })()}
        </div>
        `
    }
}


customElements.define("comp-category", CategoryComponent)
