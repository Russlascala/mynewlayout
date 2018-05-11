window.onscroll = function() {stickyNav()};

var navbar = document.getElementsByClassName("navbar");
var navDropdown = document.getElementById("navDropdown");
var initiate = document.getElementById("imgBanner");
var sticky = initiate.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar[0].classList.add("sticky");
    navDropdown.classList.add("stickyDrop");
  } else {
    navbar[0].classList.remove("sticky");
    navDropdown.classList.remove("stickyDrop");
  }
}
