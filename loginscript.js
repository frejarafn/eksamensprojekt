// Passworf login til loginsiden
const loginKey = 'key'
const loginPassword = '1234'

/** Reference til loginknappen */
const loginButton = document.getElementById('loginbutton')
const logoutButton = document.getElementById('logoutButton')
const loginDiv = document.getElementById('loginDiv')
const logoutDiv = document.getElementById('logoutDiv')
const loginChecker = document.getElementById('loginChecker')

// Siden har fået en loginchecker id så der bliver checket om man er logget på eller ej, og ellers bliver man viderestillet til loginsiden 
if (loginChecker) {
    if (!isLoggedIn()) document.location.replace('login.html')
}
// vis man er logget ind, vises loginknappen ikke, og ellers vises logoutknappen ikke
if (loginDiv) {
    if (isLoggedIn()) loginDiv.style.display = 'none'
    else logoutDiv.style.display = 'none'
}

// Hvis loginknappen er der så finder den en reference til password input feltet, så tilføjer den  et click event på knappen(hvor der trykkes) og man bliver herefter ført support.html, hvis det rigtige password er indtastet 
if (loginButton) {
    const password = document.getElementById('password')
    loginButton.addEventListener("click", () => {
        if (logIn(password.value)) document.location.replace('supportsite.html')
    })
}
// Hvis man klikker på logoutknappen bliver loginknappen vist og logoutknappen bliver skjult, og man logger ud
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        logOut()
          loginDiv.style.display = ''
         logoutDiv.style.display = 'none'
    })
}
// Checker om man er logget ind eller ej ved at checke den nøgle der ligger i local storage, om den har samme indhold som password 
function isLoggedIn () {
    return localStorage.getItem(loginKey) === loginPassword
}

/** Login gemmer password i browserens local storage, så der huskes at man er logget på. På sidste linje kalder den koden ovenfor og ser om man er logget ind eller ej */ 
function logIn (password) {
    localStorage.setItem(loginKey, password)
    return isLoggedIn()
}
// Her slettes det item i local storage indeholdende passworden og logger hermed ud
function logOut () {
    localStorage.removeItem(loginKey)
}





