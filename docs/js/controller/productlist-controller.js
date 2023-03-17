class ProductListController {
    static choosenCategory = 1;
    static no_wa = '6281317980678'

    static displayProductCards() {
        //get product with correct category
        let productInCategory = Product.data.filter((product) => product.category == ProductListController.choosenCategory);

        //get template
        const container = document.getElementById("product-container")
        container.innerHTML = ""
        productInCategory = productInCategory.map((product) => {
            container.appendChild(Component.create("app-product", {
                product:product,
                no_wa:ProductListController.no_wa
            }));
        });
    }

    static changeVariant(state, variant) {
        let { product } = state
        let productCard = document.getElementById(product.codeMaster);
        state.variant = variant;
        let template = templateProductCardVariant(state)
        productCard.innerHTML = template
    }

    static changeCategory(category) {
        ProductListController.choosenCategory = category;
        ProductListController.displayProductCards();
    }

    static changeSatuan(id) {

    }

}