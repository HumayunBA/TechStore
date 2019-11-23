var listOfProduct
var counter=JSON.parse(localStorage.getItem("shoppingList"))?JSON.parse(localStorage.getItem("shoppingList")).length:0;


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

    setHeader()
    
    var main = document.getElementsByTagName("main")[0]

        var container = document.createElement("div")
        container.classList.add("container")
    
        for(var i = 0; i < listOfProducts.length; i++) {
            var selectedPhone= listOfProducts[i]
            var phoneCard = createPhoneCard(selectedPhone)
            phoneCard.classList.add("phoneCard")
            container.appendChild(phoneCard)
            
            
        }
       
        main.appendChild(container)  
}

function createPhoneCard(selectedPhone) {
    var phoneCard= document.createElement("div")
    phoneCard.classList.add("main-pageProduct-container")
    var infoList = document.createElement("ul")

    var phoneName = document.createElement("h2")
    var phoneDescription = document.createElement("p")
    var phoneImage = document.createElement("img")
    var phonePrice = document.createElement("p")
   
    phoneName.innerText = selectedPhone.title
    phoneDescription.innerText = selectedPhone.description
    phoneImage.setAttribute('src',"./assets/" + selectedPhone.image)
    phonePrice.innerText = selectedPhone.price+" "+"kr";

    var buyButton = document.createElement("button")
            var spanForButtonText = document.createElement("span")
            var spanForButtonIcon = document.createElement("span")

            buyButton.appendChild(spanForButtonIcon);
            buyButton.appendChild(spanForButtonText);

            spanForButtonIcon.innerHTML = '<i class="fas fa-cart-arrow-down own-fa-cart-arrow-down"></i>';
            spanForButtonText.innerText = "Lägg till i kundvagnen"
            buyButton.classList.add("shopping-button", "btn-primary")

            buyButton.data = selectedPhone
            buyButton.addEventListener("click", function() {
                addToCart(this.data)
           })
            
  
    phoneImage.className="pI"
    infoList.appendChild(phoneName)
    infoList.appendChild(phoneDescription)
    infoList.appendChild(phoneImage)
    infoList.appendChild(phonePrice)
    infoList.appendChild(buyButton)
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
    mainPageLink.className="nav-link navbar"
    header1.appendChild(mainPageLink)

    var headerDiv=document.createElement("div")
    headerDiv.className="headerDiv"

    var logInPage=document.createElement("div")
    
    if(localStorage.getItem('inLoggedUser')){
        logInPage.classList='fas fa-sign-in-alt fa-rotate-180'
    }
   else logInPage.className='fas fa-sign-in-alt '
    logInPage.addEventListener('click', function(e) {
        window.location.href = './logInPage.html'
    }, false);
    logInPage.addEventListener("mouseover", function(){
        logInPage.style.cursor = "pointer";
    })

    var productCounter=document.createElement("div")
    productCounter.innerText=counter;
    productCounter.id="productCounter"

   var shoppingCart=document.createElement("div")
    shoppingCart.className='fas fa-shopping-cart fa'
    shoppingCart.id=shoppingCart;
    shoppingCart.addEventListener('click', function(e) {
        window.location.href = './kundvagn.html'
    }, false);
    shoppingCart.addEventListener("mouseover", function(){
        shoppingCart.style.cursor = "pointer";
    })
    headerDiv.appendChild(logInPage)
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
   
     var length=storedNames.length;
     var product1=product;
     product1.num=length;

   storedNames.push(product1)
   localStorage.setItem("shoppingList", JSON.stringify(storedNames)); 
   document.getElementById("productCounter").innerText=storedNames.length
}


