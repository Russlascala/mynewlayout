window.onscroll = function() {stickyNav()};

var navbar = document.getElementsByClassName("navbar");
var initiate = document.getElementById("slideshow");
var sticky = initiate.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar[0].classList.add("sticky");
  } else {
    navbar[0].classList.remove("sticky");
  }
}
