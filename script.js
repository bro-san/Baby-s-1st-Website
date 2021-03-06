/*
const h2 = document.createElement('h2');
h2.textContent = "This content was added by JavaScript... Sweet!";
document.getElementById('firstHeader').appendChild(h2);
*/

window.onscroll = function() {stickyNavBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const lawSound = document.getElementsByClassName("textLaw");

function testAlert() {
    alert('It worked!');
}

lawSound.addEventListener('click', testAlert);