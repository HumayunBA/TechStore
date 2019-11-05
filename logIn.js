var checked=false;
function initSite() {
 // localStorage.clear()
    setHeader();
    if(!localStorage.getItem('inLoggedUser')){
    setLogIn()}
    else {
      account();
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
  //shoppingCart.id=shoppingCart;
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
    h1.className="mb-4"
    h1.innerText="Please sign in"

    var label1=document.createElement("label")
    label1.className="sr-only"
    label1.innerText='Email address'
   

    var input1=document.createElement("input")
    input1.type="email"
    input1.id="inputEmail" 
    input1.className="form-control" 
    input1.placeholder="Enter email"

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
    input3.value="Register me"
    label3.innerText="register new user  "
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
 submitBtn.innerText="Sign in"
 submitBtn.addEventListener('click' ,function(e){
  e.preventDefault();
   login();
  })
   


 //form.appendChild(img)
 form.appendChild(h1)
 form.appendChild(label1)
 form.appendChild(input1)
 form.appendChild(label2)
 form.appendChild(input2)
 form.appendChild(label3)
 form.appendChild(submitBtn)

 main.appendChild(form)
  
}


/*<body class="text-center">
    <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </body>*/

  



function login() {
  
  if (checked==false){
	var username = document.getElementById('inputEmail').value
  var password = document.getElementById('inputPassword').value
  
  if (!localStorage.getItem("userList")) {
    localStorage.setItem("userList", "[]");
}
  var storedUsers = JSON.parse(localStorage.getItem("userList"))
if(storedUsers.length==0){
  alert("No users are registered")
}
	for(var i = 0; i < storedUsers.length; i++) {
		if(username == storedUsers[i].username && password == storedUsers[i].password) {
      console.log(username + ' is logged in!!!')
      var newUser={username: username,
        password: password, 
        items: storedUsers[i].items
      }
      localStorage.setItem('inLoggedUser',JSON.stringify(newUser))
      window.location.reload(); 
      account();
     // window.location.reload();
      //localStorage.setItem('inLoggedUser',JSON.stringify(newUser))	
      		break;
    } else //if(i==storedUsers.length-1 )
     {
             console.log('incorrect username or password')
      //alert('incorrect username or password')
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
  
  if (!localStorage.getItem("userList")) {
    localStorage.setItem("userList", "[]");
}
var storedUsers = JSON.parse(localStorage.getItem("userList"))

	var newUser = {
		username: registerUsername,
    password: registerPassword,
    items: JSON.parse(localStorage.getItem('shoppingList'))
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
localStorage.setItem('userList', JSON.stringify(storedUsers)); 
console.log(localStorage.inLoggedUser)
  }
  }





//ubmitBtn.addEventListener('click' ,function(e){
  //e.preventDefault();
   //login();})
   







function account(){
  //window.location.reload(); 
    var main=document.getElementsByTagName("main")[0]
    var text1=document.createElement("p")
    var user=JSON.parse(localStorage.getItem("inLoggedUser"))
    text1.innerText=user.username+ ",welcome back!"


    var logOutBtn=document.createElement("button")
    logOutBtn.className="btn btn-lg btn-primary btn-block"
    logOutBtn.type="submit"
    logOutBtn.innerText="Log out"
    logOutBtn.addEventListener('click' ,function(e){
     e.preventDefault();
     localStorage.removeItem('inLoggedUser');
    window.location.reload(); 
 })
    main.appendChild(text1)
    main.appendChild(logOutBtn)
  }





/*else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}*/