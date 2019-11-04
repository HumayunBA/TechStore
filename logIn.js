var checked=false;
function initSite() {
   
    setHeader();
    setLogIn()
          
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
  
  headerDiv.appendChild(productCounter)
  headerDiv.appendChild(shoppingCart)

  headerBox.appendChild(header1)
  headerBox.appendChild(headerDiv)

  header[0].appendChild(headerBox)  
}



function setLogIn(){
    var body=document.getElementsByTagName("body")[0]
    body.className="text-center"

    var form=document.createElement("form")
    form.className="form-signin"

   /* var img=document.createElement("img")
    img.className="mb-4"
    img.src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
    img.width="72"
    img.height="72"*/

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
    input3.id="myCheck"
    input3.value="Register me"
    input3.addEventListener('change', e => {
      if(e.target.checked){
          checked=true
      }
    else{
      cheked=false
    }})

      label3.appendChild(input3)
 var submitBtn=document.createElement("button")
 //submitBtn.className="btn btn-lg btn-primary btn-block"
 //submitBtn.type="submit"
 submitBtn.innerText="Sign in"
 submitBtn.addEventListener('click' ,function(e){
  e.preventDefault();
   login();})
   


 //form.appendChild(img)
 form.appendChild(h1)
 form.appendChild(label1)
 form.appendChild(input1)
 form.appendChild(label2)
 form.appendChild(input2)
 form.appendChild(label3)
 form.appendChild(submitBtn)

 body.appendChild(form)
  
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

  

var objPeople = [
	{
		username: 'sam@s',
		password: '1'
	},
	{
		username: 'matt',
		password: 'password88'
	},
	{
		username: 'chris',
		password: 'password3'
	}
]


function login() {
  if (checked==false){
	var username = document.getElementById('inputEmail').value
	var password = document.getElementById('inputPassword').value
	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			// stop the statement if result is found true - this was a return in the video, break is best practice here
			break;
    } else if(i==objPeople.length-1)
     {
			// error if username and password don't match
			console.log('incorrect username or password')
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
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUsername == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is alreat in user, please choose another')
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			break
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
}