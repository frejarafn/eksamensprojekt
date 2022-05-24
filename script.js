// slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}







const loginKey = 'key'
const loginPassword = '1234'

/** Reference til loginknappen */
const loginButton = document.getElementById('loginbutton')
const logoutButton = document.getElementById('logoutButton')
const loginDiv = document.getElementById('loginDiv')
const logoutDiv = document.getElementById('logoutDiv')
const loginChecker = document.getElementById('loginChecker')

// Hvis siden har en loginchecker id så bliver der checket om man er logget på eller ej, og ellers bliver man viderestillet til loginsiden 
if (loginChecker) {
    if (!isLoggedIn()) document.location.replace('login.html')
}

if (loginDiv) {
    if (isLoggedIn()) loginDiv.style.display = 'none'
    else logoutDiv.style.display = 'none'
}


if (loginButton) {
    const password = document.getElementById('password')
    loginButton.addEventListener("click", () => {
        if (logIn(password.value)) document.location.replace('index.html')
    })
}

if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        logOut()
          loginDiv.style.display = ''
         logoutDiv.style.display = 'none'
    })
}

function isLoggedIn () {
    return localStorage.getItem(loginKey) === loginPassword
}

/** Login gemmer password i browserens local storage */ 
function logIn (password) {
    localStorage.setItem(loginKey, password)
    return isLoggedIn()
}

function logOut () {
    localStorage.removeItem(loginKey)
}






// FAQ accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


