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
        // here we call the fuktion makeParallaxScroll
        makeParallaxScroll('#collage1', 9);
        makeParallaxScroll('#collage2', 7);
        makeParallaxScroll('#collage3', 5);
        
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

  
// We make a reusable function, that we can call as many times as we want.
    /* We use function and give it a name. Then we name two parameters whatToLookFor = the selector for the element we look for (img), howMuchEffect = The higher the number, the slower it will scroll*/
    function makeParallaxScroll(whatToLookFor, howMuchEffect) {


        // scrollTop tells us how far we have scrolled from the top of the window 
        var scrollTop = $(window).scrollTop();

        // for example: if we scroll 100px; down and howMuchEffect is 4 the element will move (100 / 4) = 25 px down.
        var howMuchToMove = scrollTop / howMuchEffect + "px";
        
        //we use jQ to find the element which we want to parallax
        //transform allows us to change the position of the element
        //translateY moves the element down the page. 
        $(whatToLookFor).css("transform", "translateY(" + howMuchToMove + ")");
    }
    
    
    
    // ... din kode slut ...

}); // denne line må ikke slettes
