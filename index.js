$(function(){
    $('.pic').html($('.pic').html()+$('.pic').html());  // 复制一份放在最后
    $('.pic').css('width',$('.pic li').width()*$('.pic li').length);  // 计算ul的总宽度
    var n = 0;
    var len = $('.pic li').length;
    var str = '';
    var timer = null;
    for(var i=0; i<len/2; i++){
        str += '<li></li>';
    }
    $('.dot').html(str);
    $('.dot li').eq(0).css({width:'15px',opacity:1});
    // 自动播放
    timer = setInterval(autoPlay,3000);
    function autoPlay(){
        n++;
        $('.dot li').removeClass('active');
        $('.dot li').css({width:'7px',opacity:'0.5'});
        if(n > len/2){
            n=1;
            $('.pic').css('left','0');
        }
        if(n == len/2){
            $('.dot li').eq(0).animate({width:'15px',opacity:1});
        }
        $('.dot li').eq(n).animate({width:'15px',opacity:1});
        $('.pic').animate({left:-($('.pic li').width()*n)});
    }
    $('.dot li').click(function(){
        clearInterval(timer);
        n = $(this).index();
        $('.dot li').css({width:'7px',opacity:'0.5'});
        $(this).animate({width:'15px',opacity:1});
        $('.pic').animate({left:-($('.pic li').width()*n)});
        timer = setInterval(autoPlay,3000);
    })
    $('.lb_banner').hover(function(){
        $('.btn').show();
    },function(){
        $('.btn').hide();
    });
    $('.next').click(function(){
        clearInterval(timer);
        autoPlay();
        timer = setInterval(autoPlay,3000);
    });
    $('.prev').click(function(){
        clearInterval(timer);
        n = n - 2;
        if(n<-1){
            n = len/2;
            $('.pic').css('left',-($('.pic li').width()*n));
            n = n -2;
        }
        autoPlay();
        timer = setInterval(autoPlay,3000);
    });
})