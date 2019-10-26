function initSite() {
   
      setHeader();
      bodyCreate()
        
    // This would also be a good place to initialize other parts of the UI
}
function setHeader(){
    var header = document.getElementsByTagName("header")

    var headerBox=document.createElement("ul")
    headerBox.classList="headerBox"
    
    //var infoList = document.createElement("ul")
    var header1=document.createElement("h1")
   var mainPageLink=document.createElement("a")
    //mainPageLink.setAttribute(href, "/index.html")
    mainPageLink.href="/index.html"
    mainPageLink.innerText="TechStore"
   header1.appendChild(mainPageLink)

    var headerDiv=document.createElement("div")
    headerDiv.className="headerDiv"

    var productCounter=document.createElement("div")
    productCounter.id="productCounter"

    var storedNames = JSON.parse(localStorage.getItem("shoppingList"))?JSON.parse(localStorage.getItem("shoppingList")):[]
    productCounter.innerText=storedNames.length

   var shoppingCart=document.createElement("div")
    shoppingCart.className='fas fa-shopping-cart fa'
    shoppingCart.id=shoppingCart;
    shoppingCart.addEventListener('click', function(e) {
        window.location.href = '/checkOut.html'
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




  function createPhoneCard(selectedPhone) { 
    var phoneCard2= document.createElement("div")
    phoneCard2.className="card"
    var infoList = document.createElement("ul")

    var phoneName = document.createElement("h2")
    var phoneImage = document.createElement("img")
    var phonePrice = document.createElement("p")
    var deleteButton=document.createElement("button");
   // buyButton.id="bBtn"
   
    phoneName.innerText = selectedPhone.title
    phoneImage.setAttribute('src',"./assets/" + selectedPhone.image)
    phonePrice.innerText = selectedPhone.price
    
    deleteButton.className='btn btn-danger far fa-trash-alt'
    deleteButton.innerText="  Delete"
    deleteButton.data=selectedPhone.num
     deleteButton.addEventListener("click", function() {
        deleteElemet(this.data)
   })


    phoneImage.className="pI"
    infoList.appendChild(phoneName)
    infoList.appendChild(phoneImage)
    infoList.appendChild(phonePrice)
    infoList.appendChild(deleteButton)
    phoneCard2.appendChild(infoList)

    return phoneCard2;
}



function bodyCreate(){ 
    
    var main = document.getElementsByTagName("main")[0]
    var header=document.createElement("h2")
    header.className="fas fa-shopping-cart"
    header.innerText=" CheckOut"
    var container = document.createElement("div")
    container.id="phones"
    container.className="row d-flex justify-content-center"
    var totalSum=0;
    var listOfProducts=JSON.parse(localStorage.getItem("shoppingList"))?JSON.parse(localStorage.getItem("shoppingList")):[]
            for(var i = 0; i < listOfProducts.length; i++) {
                var selectedPhone= listOfProducts[i]
                var phoneCard = createPhoneCard(selectedPhone)
                phoneCard.classList.add="phoneCard"
                phoneCard.classList.add="col-sm-6"
                container.appendChild(phoneCard)
             totalSum+=Number(selectedPhone.price)
               
            }
            console.log(totalSum)
          var totalPrice=document.createElement("div") 
          totalPrice.innerText="Total price: "+totalSum
         
          var completePurchase=document.createElement("button");
          completePurchase.className='btn btn-primary fas fa-check fa';
            completePurchase.innerText=" Complete the purchase"
            main.appendChild(header)
            main.appendChild(container)
            main.appendChild(totalPrice)
            main.appendChild(completePurchase)
           console.log(main)
}

function deleteElemet(product){
    var storedNames = JSON.parse(localStorage.getItem("shoppingList"))
    console.log(localStorage)
    storedNames.splice(product, 1)
    for(var i=0;i<storedNames.length;i++)
    {
        storedNames[i].num=i;
    }
    localStorage.setItem("shoppingList", JSON.stringify(storedNames)); 

    window.location.reload(); 
}

