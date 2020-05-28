$(document).ready(function(){

    //Assist
    var contact  = $('#assist-contact');
    var info  = $('#assist-info');
    var contactInner = $('.contact');
    var infoInner = $('.info');

    $('#assist').on('click', function(){
        if (contact.hasClass('active') || info.hasClass('active') || contactInner.hasClass('active') || infoInner.hasClass('active')) {
            contact.toggleClass('active', false);
            info.toggleClass('active', false);
            contactInner.toggleClass('active', false);
            infoInner.toggleClass('active', false);
        } else {
            contact.toggleClass('active', true);
            info.toggleClass('active', true);
        }
    });

    $(contact).on('click', function(){
        contactInner.toggleClass('active', true);
        infoInner.toggleClass('active', false);
    });

    $(info).on('click', function(){
        infoInner.toggleClass('active', true);
        contactInner.toggleClass('active', false);
    });

    $(window).on('scroll', function(){
        setTimeout(function(){
            contact.toggleClass('active', false);
            info.toggleClass('active', false);
        }, 300);
        contactInner.toggleClass('active', false);
        infoInner.toggleClass('active', false);
    });
});