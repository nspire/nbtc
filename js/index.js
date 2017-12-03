$(document).ready(function () {
    // Initialise SmoothScroll instance (courtesy of Chris Ferdinandi gh: @cferdinandi)
    var scroll = new SmoothScroll('a[href*="#"]');

    // Bootstrap scrollspy for nav link highlighting
    $('body').scrollspy({ target: '#nav-links' });

    // Collapse navbar on anchor selection
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse("hide");
    });

    $('.jumbotron').click(function() {
        $('.navbar-collapse').collapse("hide");
    });
});