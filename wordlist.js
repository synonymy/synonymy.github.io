$(document).ready(main)
function main(){
    $('.panel').hide();
    $('.showBut').hover(function(){
        $('.panel').stop(true, true).slideDown(400);
    });
    $('.page').hover(function(){
        $('.panel').slideUp(400);
    })
}



