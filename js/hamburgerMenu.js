/*Toggle the menu open / closed*/
function menuFunction() {
  var x = document.getElementById("mobileNavBar");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}
