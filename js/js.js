/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar


    // ... din kode herfra ...

    /**
     * Back to Top button by Matthew Cain (https://codepen.io/matthewcain/pen/ZepbeR)
     **/
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    /**
     * END of Back to Top Button by Matthew Cain
     **/

    // ... din kode slut ...

}); // denne line må ikke slettes
