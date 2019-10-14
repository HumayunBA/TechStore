var listOfProducts;


function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts(); 
    
}


function addProductsToWebpage() {

    var body = document.getElementsByTagName("body")[0]
    var conatiner = document.createElement("div")
    conatiner.classList = "container"
   
    for(var i = 0; i < listOfProducts.length; i++) {
       var selectedProduct = listOfProducts[i]
       var productCard = createProductCard(selectedProduct)
       conatiner.appendChild(productCard)
     
     }
     body.appendChild(conatiner)
    }

function createProductCard(selectedProduct) {
        var productCard = document.createElement("div")
        var infoItem = document.createElement("div")
    
        var titleItem = document.createElement("p")
        var descriptionItem = document.createElement("p")
        var imageItem = document.createElement("img")
        imageItem.src = "assets/" + selectedProduct.image
        imageItem.setAttribute("width", "304")
        imageItem.setAttribute("height", "450")
        var priceItem = document.createElement("p")
    
        titleItem.innerText = selectedProduct.title
        descriptionItem.innerText = selectedProduct.description
        imageItem.innerText = selectedProduct.image
        priceItem.innerText = selectedProduct.price
    
        infoItem.appendChild(titleItem)
        infoItem.appendChild(descriptionItem)
        infoItem.appendChild(imageItem)
        infoItem.appendChild(priceItem)
    
        productCard.appendChild(infoItem)
    
        return productCard
    }


    


   