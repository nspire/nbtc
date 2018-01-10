$(document).ready(function () {

    // Initialise SmoothScroll instance (courtesy of Chris Ferdinandi gh: @cferdinandi)
    var scroll = new SmoothScroll('a[href*="#"]');

    // Bootstrap scrollspy for nav link highlighting
    $('body').scrollspy({ target: '#nav-links' });

    // Collapse navbar on anchor select
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('.jumbotron').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


});


(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('#nav').fadeIn(500);
            } else {
                $('#nav').fadeOut(500);
            }
        });
    });
})(jQuery);
