$(document).ready(function() {

    changeBackground();

    window.onscroll = function() { navCheck(); };

    var navbar = document.getElementById("navigation");

    var about = document.getElementById("registration");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navCheck() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            about.classList.add("pad");
        } else {
            navbar.classList.remove("sticky");
            about.classList.remove("pad");
        }
    }

    function changeBackground() {
        var dt = new Date();
        var h = dt.getHours();
        console.log(h);
        if (h > 19 || h < 4) {
            $("#home").addClass("night");
            $("#sub-title").addClass("sub-title-night");
        }
        else {
            $("#home").addClass("day");
            $("#sub-title").addClass("sub-title-day");
        }
    }

});