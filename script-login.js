
console.log("Login script linked");

document.getElementById("loginfield").innerHTML =
  localStorage.getItem("usernamevalue");

document.getElementById("logoutbutton").addEventListener("click", logOut);
//eventlistener -> if localstorage !empty, then clear
function logOut() {
  localStorage.clear();
  var defaultNav = document.getElementById("loginfield");
  if (localStorage === "") {
  }
  /*const login = login.innerHTML = <li><a href="login-signup.html" id="loginfield">Log In</a><a href="account.html" id="accountfield"></a></li>*/
}

console.log("1 of 2 login script working, 2 only applies in success.html");

document.getElementById("result").innerHTML =
  localStorage.getItem("usernamevalue");
console.log("Login script linked and 2 of 2 running");

// make so you hide the class="loginsignupbutton" from cart, when logged in.
//Make it so that this class will instead redirect to checkout

/*
          function(login) {


          }*/

/*
        let loggedInName = localStorage.getItem("usernamevalue");
        console.log(loggedInName);
        console.log("test");
        //check if the local storage has a value
        //if usernamevalue is not empty have to hide the sign up form
        */
/*
          function logOut(){
            localStorage.removeItem("usernamevalue");
          }
          */
