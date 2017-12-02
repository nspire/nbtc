$(document).ready(function () {
    // Initialise SmoothScroll instance (courtesy of Chris Ferdinandi gh: @cferdinandi)
    var scroll = new SmoothScroll('a[href*="#"]');

    // Bootstrap scrollspy for nav link highlighting
    $('body').scrollspy({ target: '#nav-links' })
});