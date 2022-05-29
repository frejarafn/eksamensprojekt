// slideshow indeholdende billeder der skiftevis bliver vist i en "carousel"
// Der vises både et slideshow på mobilversionen og desktopversionen af siden som kører på samme tid
// Ved implementeringen af denne kode er der hentet inspiration fra https://www.w3schools.com/w3css/w3css_slideshow.asp
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var element = document.getElementsByClassName("mySlides");
  for (i = 0; i < element.length; i++) {
    element[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > element.length) {myIndex = 1}
  element[myIndex-1].style.display = "block";  
  if (getComputedStyle(element[myIndex-1].parentElement.parentElement.parentElement).display === 'none') {
    // hvis display er none på "parentElementet" bliver den ikke vist,
    // kører carousel med det samme igen for at skippe til næste billedet
    carousel()
  } else {
    setTimeout(carousel, 3000); // Skift billede hver 3 sekund
  
  }
}





