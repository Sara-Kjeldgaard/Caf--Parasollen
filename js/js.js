/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar


    // ... din kode herfra ...

    /**
    * Video controls (find method to do it in ONE function rather than 2)
    **/
    var $btnRasmus = $("#interviewRasmusBtn");
    var videoRasmus = $("#interviewVideoRasmus").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */
    
    $btnRasmus.on('click', function () {
        if (videoRasmus.paused) {
            videoRasmus.play();
        }
        else {
            videoRasmus.pause();
        }
    });
    
    var $btnAllan = $("#interviewAllanBtn");
    var videoAllan = $("#interviewVideoAllan").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */
    
    $btnAllan.on('click', function () {
        if (videoAllan.paused) {
            videoAllan.play();
        }
        else {
            videoAllan.pause();
        }
    });
    

    /**
    * Audio controls (again, find method to do it in ONE function rather than 2)
    **/
    var $audioIconPhilip = $("#audioIconPhilip");
    var audioPhilip = $("#audioPhilip").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */
    
    $audioIconPhilip.on('click', function () {
        if (audioPhilip.paused) {
            audioPhilip.play();
        }
        else {
            audioPhilip.pause();
        }
    });
    
    var $audioIconVeyis = $("#audioIconVeyis");
    var audioVeyis = $("#audioVeyis").get(0); /* get(0) henter den følgende funktion i JavaScript, frem for i JQuery */
    
    $audioIconVeyis.on('click', function () {
        if (audioVeyis.paused) {
            audioVeyis.play();
        }
        else {
            audioVeyis.pause();
        }
    });
    
  
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
