var listOfProduct
var counter=0;

/** Get products from the json file and store it in a gobal variable */
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
     
        
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {

    setHeader()
    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
    


    // Check your console to see that the products are stored in the listOfProducts varible.
    //console.log(listOfProducts);
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



//localStorage.setItem("names", JSON.stringify(names));


//var storedNames = JSON.parse(localStorage.getItem("names"));

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


