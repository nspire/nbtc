$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        console.log('Navbar toggled');
        $('#sidebar').toggleClass('stowed');
    });
});