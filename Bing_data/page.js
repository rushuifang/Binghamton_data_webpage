// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    stickyFunc();
};

// Get the navbar
var navbar = document.getElementById("head-nav");
// console.log(navbar.classList);
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// console.log(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function ithacaFunc() {
    alert("I'm under construction!");
}

function syracuseFunc() {
    alert("And I'm just a click bait!");
}
