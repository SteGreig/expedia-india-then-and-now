
jQuery(document).ready(function($) {


    $(window).load(function() {
        $(".slide-reveal").twentytwenty();
        $('.slide-reveal img').show();
        $('.twentytwenty-handle').show();
        $('.slide-reveal').css('background-color','#000');
    });

    $('.info-btn').click(function() {
        $('.content-popup').addClass('show');
        $('.overlay').addClass('show');
    });

    $('.close, .overlay').click(function() {
        $('.content-popup').removeClass('show');
        $('.overlay').removeClass('show');
    });

    $('.continue').click(function() {
        $('.instructions').hide();
        $('.overlay').removeClass('show');
    });


    var windowWidth = $(window).width();
    if (windowWidth < 850) {
        $('.content-popup h2').click(function() {
            $(this).next().slideToggle();
            $(this).toggleClass('active');
        });
    } else {
        $('.content-popup h2:first-of-type').addClass('active');
        $('.content-popup h2').click(function() {
            $(this).parent().find('> .panel').hide();
            $(this).parent().find('h2').removeClass('active');
            $(this).next().show();
            $(this).toggleClass('active');
        });
    }

    $('.slide-reveal img').hover(function() {
        $(this).prev('img').addClass('fade');
        $(this).next('img').addClass('fade');
        $(this).removeClass('fade');
    });

    $('.slide-reveal').hover(function() {
        $('.label').fadeToggle('fast');
    });

    $('.handle-underlay, .twentytwenty-handle').hover(function() {
        $('.slide-reveal img').removeClass('fade');
    });
    $('.handle-underlay, .twentytwenty-handle').mousedown(function() {
        $('.twentytwenty-overlay').show();
    });
    $('.handle-underlay, .twentytwenty-handle').mouseup(function() {
        $('.twentytwenty-overlay').hide();
    });


    // Disable Google Maps Zoom on Scroll
    $('.map-wrap').click(function () {
        $('.map-wrap iframe').css("pointer-events", "auto");
    });

    $( ".map-wrap" ).mouseleave(function() {
      $('.map-wrap iframe').css("pointer-events", "none"); 
    });


    // ------------------------------------------------------------------------
    // Make Facebook/Twitter buttons open in popup window
    // ------------------------------------------------------------------------
    $('.fb, .tweet').click(function (event) {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});




