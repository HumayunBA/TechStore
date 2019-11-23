var checked=false;
function initSite() {
    setHeader();
    if(localStorage.getItem('inLoggedUser')){
      account();}
    else {
      setLogIn();
    }
          
}
function setHeader(){
  var header = document.getElementsByTagName("header")

  var headerBox=document.createElement("ul")
  headerBox.classList="headerBox"
  
  var header1=document.createElement("h1")
  var mainPageLink=document.createElement("a")
  
  mainPageLink.href="/index.html"
  mainPageLink.className="nav-link"
  mainPageLink.innerText="TechStore"
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
  productCounter.id="productCounter"

  var storedNames = JSON.parse(localStorage.getItem("shoppingList"))?JSON.parse(localStorage.getItem("shoppingList")):[]
  productCounter.innerText=storedNames.length

  var shoppingCart=document.createElement("div")
  shoppingCart.className="fas fa-shopping-cart fa"
  shoppingCart.id=shoppingCart;
  shoppingCart.addEventListener('click', function(e) {
      window.location.href = '/kundvagn.html'
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



function setLogIn(){
    var main=document.getElementsByTagName("main")[0]
    main.className="text-center body2"

    var form=document.createElement("form")
    form.className="form-signin"

    var h1=document.createElement("h1")
    h1.className="mb-4 black"
    h1.innerText="Logga in på ditt konto"

    var label1=document.createElement("label")
    label1.className="sr-only"
    label1.innerText='Email address'
   

    var input1=document.createElement("input")
    input1.type="email"
    input1.id="inputEmail" 
    input1.className="form-control" 
    input1.placeholder="Email"

    var label2=document.createElement("label")
    label2.className="sr-only"
    label2.innerText="Password"

    var input2=document.createElement("input")
    input2.type="password"
    input2.id="inputPassword" 
    input2.className="form-control" 
    input2.placeholder="Password"
 
    var label3=document.createElement("label")

    var input3=document.createElement("input")
    input3.type="checkbox"
    input3.value="Registrera"
    label3.innerText="registrera nytt konto  "
    input3.addEventListener('change', e => {
      if(e.target.checked){
          checked=true
      }
    else{
      cheked=false
    }})

      label3.appendChild(input3)
 var submitBtn=document.createElement("button")
 submitBtn.className="btn btn-lg btn-primary btn-block"
 submitBtn.type="submit"
 submitBtn.innerText="LOGGA IN "
 submitBtn.addEventListener('click' ,function(e){
  e.preventDefault();
   login();
  })
   
 form.appendChild(h1)
 form.appendChild(label1)
 form.appendChild(input1)
 form.appendChild(label2)
 form.appendChild(input2)
 form.appendChild(label3)
 form.appendChild(submitBtn)

 main.appendChild(form)
  
}

function login() {
  
  if (checked==false){
    var username = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
  
  if (!localStorage.getItem("storedUsers")) {
    localStorage.setItem("storedUsers", "[]");
  }

  var storedUsers = JSON.parse(localStorage.getItem("storedUsers"))

  if(storedUsers.length==0){
    alert("No users are registered")
  }

	for(var i = 0; i < storedUsers.length; i++) {

		if(username == storedUsers[i].username && password == storedUsers[i].password) {
      var newUser={username: username,
        password: password, 
        items: storedUsers[i].items
    }
    
    localStorage.setItem('inLoggedUser',JSON.stringify(newUser))

    window.location.reload(); 
    
    } else //if(i==storedUsers.length-1 )
     {
             alert('incorrect username or password')
		}
  }
  
}

else {
  registerUser()
  checked=false
}
}


function registerUser() {
  var registerUsername = document.getElementById('inputEmail').value
  var registerPassword = document.getElementById('inputPassword').value
  
  if (!localStorage.getItem("storedUsers")) {
    localStorage.setItem("storedUsers", "[]");
  }
  var storedUsers = JSON.parse(localStorage.getItem("storedUsers"))

  var newUser = {
    username: registerUsername,
    password: registerPassword,
    items: [] 
  }
  var i=0
  for(i ; i < storedUsers.length; i++) {
    if(registerUsername == storedUsers[i].username) {
      alert('That username is alreat in user, please choose another')
      break
    } 
  }
  if (i==storedUsers.length){
    storedUsers.push(newUser)
    localStorage.setItem('inLoggedUser',JSON.stringify(newUser))
    localStorage.setItem('storedUsers', JSON.stringify(storedUsers)); 
    window.location.reload(); 
  }
}


function account(){

    var main=document.getElementsByTagName("main")[0]

    var text1=document.createElement("p")
    var user=JSON.parse(localStorage.getItem("inLoggedUser"))
    text1.innerText=user.username+ ", välkommen tillbaka!"


    var text2=document.createElement("h3")
    text2.innerText="Dina beställningar: "


    var logOutBtn=document.createElement("button")
    logOutBtn.className="btn btn-lg btn-primary btn-block"
    logOutBtn.type="submit"
    logOutBtn.innerText="Logga ut"
    logOutBtn.addEventListener('click' ,function(e){
     e.preventDefault();
     localStorage.removeItem('inLoggedUser');
     window.location.reload(); 
    })

    var inLoggedUser=JSON.parse(localStorage.getItem("inLoggedUser"))
    inLoggedUser=JSON.parse(localStorage.getItem('inLoggedUser'))
    purchases= inLoggedUser.items
  
   var orderList= document.createElement("div")
    for(var j=0;j<purchases.length;j++){
      var orderContainer= document.createElement("div")
      orderContainer.id="phones"
      var totalSum=0
      var sum=document.createElement("p")
       for(var i = 0; i < purchases[j].length; i++) {
        var selectedPhone= purchases[j][i]
         var phoneCard = smallPhoneCard(selectedPhone)
         phoneCard.classList.add="phoneCard"
         phoneCard.classList.add="col-sm-6"
         orderContainer.appendChild(phoneCard)
         totalSum+=Number(selectedPhone.price)
     }
     sum.innerText="Totalt pris: "+ totalSum+" kr"
     orderContainer.appendChild(sum)
     orderList.appendChild(orderContainer)
     
    }
    main.appendChild(text1)
    main.appendChild(logOutBtn)
    main.appendChild(text2)
    main.appendChild(orderList)
    
}

function smallPhoneCard(selectedPhone) { 
  var phoneCard2= document.createElement("div")
  phoneCard2.className="card"
  var infoList = document.createElement("ul")

  var phoneImage = document.createElement("img")
  var phoneName = document.createElement("h2")
  var phonePrice = document.createElement("p")
 

 
  phoneName.innerText = selectedPhone.title
  phoneImage.setAttribute('src',"./assets/" + selectedPhone.image)
  phonePrice.innerText = selectedPhone.price+" "+"kr";
  

  phoneImage.className="pI"
 
  infoList.appendChild(phoneImage)
  infoList.appendChild(phoneName)
  infoList.appendChild(phonePrice)

  phoneCard2.appendChild(infoList)

  return phoneCard2;
}




