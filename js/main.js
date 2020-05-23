$(document).ready(function(){

    var contact  = $('#assist-contact');
    var info  = $('#assist-info');

    $('#assist').on('click', function(){

        if (contact.hasClass('active')) {
            contact.toggleClass('active', false);
            info.toggleClass('active', false);
        } else {
            contact.toggleClass('active', true);
            info.toggleClass('active', true);
        }

    });

    $(window).on('scroll', function(){
        contact.toggleClass('active', false);
        info.toggleClass('active', false);
    });

});