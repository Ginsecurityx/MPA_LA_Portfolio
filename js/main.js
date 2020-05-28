$(document).ready(function(){

    //Assist
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

    $(contact).on('click', function(){
        $('.contact').toggleClass('active', true);
        $('.info').toggleClass('active', false);
    });

    $(info).on('click', function(){
        $('.info').toggleClass('active', true);
        $('.contact').toggleClass('active', false);
    });


    $(window).on('scroll', function(){
        setTimeout(function(){
            contact.toggleClass('active', false);
            info.toggleClass('active', false);
        }, 300);
        $('.contact').toggleClass('active', false);
        $('.info').toggleClass('active', false);
    });
});