$(function(){
    $('.menu-open').click(function () { 
        $('.menu-links').css({
            transform: 'translate(0%, 0%)'
        });
    });
    $('.menu-close').click(function () { 
        $('.menu-links').css({
            transform: 'translate(-200%, 0%)'
        });
    });
})