$(document).ready(function(){

    // $(window).on('load', function(){
    //     let colors = ['#b3b3ff', '#ffb3ff', '#b3e9ff'];
    //     // var body = $(body);

    //     // for(var i=0; i<colors.length; i++){
    //     //     Math.floor(Math.random()*colors.length);
    //     // }

    //     let colorOne = colors[0];

    // });


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