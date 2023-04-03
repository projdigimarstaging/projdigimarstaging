class CarouselComponent extends Component{
    template(){
        return `
        <div id="${this.caroselid}" class="carousel slide my-4" data-ride="carousel" ${this.datainterval?`data-interval="${this.datainterval}"`:false} ${this.caroselstyle?`style="${this.caroselstyle}"`:``}>
            <ol class="carousel-indicators">
                ${(()=>{
                    return this.dataimg.map((img, index)=>{
                        return `<li data-target="#${this.id}" data-slide-to="${index}" ${index == 0 ? `class="active"` : `` }></li>`
                    }).join("")
                })()}
            </ol>
            <div class="carousel-inner" role="listbox" ${this.listBoxStyle? this.listBoxStyle:``}>
                ${(()=>{
                    return this.dataimg.map((img, index)=>{
                        return `<div class="carousel-item ${index ==0? `active`: ``}">
                                    <img class="d-block img-fluid ${this.imgclass?this.imgclass:``}" src="${img}" alt="slide ${index+1}">
                                </div>`
                    }).join("")
                })()}
            </div>
            <a class="carousel-control-prev" href="#${this.caroselid}" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${this.caroselid}" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        `
    }
}

//style=" width:100%; height: 300px !important;"

customElements.define('comp-carousel', CarouselComponent)