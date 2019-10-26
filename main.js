var listOfProduct
var counter=0;


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
    localStorage.clear()
      loadProducts();
     
}


function addProductsToWebpage() {

    setHeader()
    
    var main = document.getElementsByTagName("main")[0]

        var container = document.createElement("div")
        container.className = "container"
    
        for(var i = 0; i < listOfProducts.length; i++) {
            var selectedPhone= listOfProducts[i]
            var phoneCard = createPhoneCard(selectedPhone)
            phoneCard.classList.add="phoneCard"
            container.appendChild(phoneCard)
            var buyButton=document.createElement("button");
            buyButton.id="bBtn"
            buyButton.innerText="add to basket  "
            var shoppingCart=document.createElement("div")
            shoppingCart.className='fas fa-shopping-cart fa'
            buyButton.appendChild(shoppingCart)
            buyButton.className='btn btn-primary'
            buyButton.data = listOfProducts[i]
           buyButton.addEventListener("click", function() {
                addToCart(this.data)
           })
            container.appendChild(buyButton)
            //console.log(selectedPhone);
           
        }
       
      
        main.appendChild(container)
       
}


function createPhoneCard(selectedPhone) {
    var phoneCard= document.createElement("div")
    phoneCard.className="pCard"
    var infoList = document.createElement("ul")

    var phoneName = document.createElement("h2")
    var phoneDescription = document.createElement("p")
    var phoneImage = document.createElement("img")
    var phonePrice = document.createElement("p")
   
    phoneName.innerText = selectedPhone.title
    phoneDescription.innerText = selectedPhone.description
    phoneImage.setAttribute('src',"./assets/" + selectedPhone.image)
    phonePrice.innerText = selectedPhone.price
  
    phoneImage.className="pI"
    infoList.appendChild(phoneName)
    infoList.appendChild(phoneDescription)
    infoList.appendChild(phoneImage)
    infoList.appendChild(phonePrice)
    phoneCard.appendChild(infoList)

    return phoneCard;
}


function setHeader(){
    var header = document.getElementsByTagName("header")

    var headerBox=document.createElement("ul")
    headerBox.classList="headerBox"
    
 
    var header1=document.createElement("h1")
    var mainPageLink=document.createElement("a")
    mainPageLink.href="/index.html"
    mainPageLink.innerText="TechStore"
    header1.appendChild(mainPageLink)

    var headerDiv=document.createElement("div")
    headerDiv.className="headerDiv"

    var productCounter=document.createElement("div")
    
    productCounter.innerText=counter;
    productCounter.id="productCounter"

   var shoppingCart=document.createElement("div")
    shoppingCart.className='fas fa-shopping-cart fa'
    shoppingCart.id=shoppingCart;
    shoppingCart.addEventListener('click', function(e) {
        window.location.href = './checkOut.html'
    }, false);
   
    shoppingCart.addEventListener("mouseover", function(){
        shoppingCart.style.cursor = "pointer";
    })
    
    headerDiv.appendChild(productCounter)
    headerDiv.appendChild(shoppingCart)


    headerBox.appendChild(header1)
    headerBox.appendChild(headerDiv)

    header[0].appendChild(headerBox)
    
}

  function add(){
      counter++;
  }


function addToCart(product){ 
    if (!localStorage.getItem("shoppingList")) {
        localStorage.setItem("shoppingList", "[]");
    }
    var storedNames = JSON.parse(localStorage.getItem("shoppingList"))
   
   //JSON.parse(localStorage.getItem("shoppingList"))?JSON.parse(localStorage.getItem("shoppingList")): [];
   console.log(product)
   console.log(storedNames)
  // var storedNames = storedNames ? JSON.parse(localStorage.getItem("shoppingList")) : {};
     //console.log(storedNames)
     var length=storedNames.length;
     var product1=product;
     product1.num=length;

   storedNames.push(product1)
   localStorage.setItem("shoppingList", JSON.stringify(storedNames)); 
   console.log(localStorage)
   document.getElementById("productCounter").innerText=storedNames.length
}


