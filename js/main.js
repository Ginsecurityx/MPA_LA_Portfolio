$(document).ready(function(){

    $('#assist').on('click', function(){

        var contact  = $('#assist-contact');
        var info  = $('#assist-info');

        if (contact.hasClass('active')) {
            contact.toggleClass('active', false);
            info.toggleClass('active', false);
        } else {
            contact.toggleClass('active', true);
            info.toggleClass('active', true);
        }

    });

});