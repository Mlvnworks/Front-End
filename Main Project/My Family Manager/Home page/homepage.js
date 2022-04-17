$(document).ready(function (){
    $('#search-container').fadeOut(1);
    // SEARCH BAR FADE-IN
    $('#search-img').click(function(){
        $('#search-container').fadeIn(100);
    })
    // SEARCH BAR FADE-OUT
    $('#search-close').click(function(){
        $('#search-container').fadeOut(100)
    })
    
})