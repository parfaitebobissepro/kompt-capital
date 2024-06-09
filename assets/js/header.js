
// A $( document ).ready() block.
$(document).ready(function() {
    // get the target div element
    const targetDiv = $('.header-navbar-nav');

    // function to check screen width and add show class if needed
    function checkScreenWidth() {
        if (window.matchMedia("(min-width: 1240px)").matches) {
            targetDiv.show();
        } else {
            targetDiv.hide();
        }
    }

    // check screen width on page load
    checkScreenWidth();

    // add event listener for screen resize
    window.addEventListener('resize', checkScreenWidth);
});