$(document).ready(main);

function main(){
    $('.menuword').hover(function(){
        $('.mainhead').toggleClass("wordhead");
    })
    $('.menuex').hover(function(){
        $('.mainhead').toggleClass("exhead");
    })
    $('.content2').hide();
    $('.meanslct').addClass("meanslcthigh");
    $('.meanslct').on('click',function(){
        $('.content1').show();
        $('.content2').hide();
        $('.meanslct').addClass("meanslcthigh");
        $('.meanslct2').removeClass("meanslcthigh");
    })
    $('.meanslct2').on('click',function(){
        $('.content1').hide();
        $('.content2').show();
        $('.meanslct').removeClass("meanslcthigh");
        $('.meanslct2').addClass("meanslcthigh");
    })
    $('.selector').click(function(e){
        e.preventDefault();
    })
}
