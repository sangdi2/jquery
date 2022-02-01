$(function(){
    var flag=true;
    var top =$('.recommend').offset().top;
    if($(document).scrollTop()>=top) {
        $('.fixedtool').fadeIn();
    }else {
        $('.fixedtool').fadeOut();
    }
   $(window).scroll(function(){
       
       if($(document).scrollTop()>=top) {
           $('.fixedtool').fadeIn();
       }else {
           $('.fixedtool').fadeOut();
       }
       if(flag)
       {
        if($(document).scrollTop()>=top)
        {
         $('.fixedtool li').eq(0).addClass('current');
         $('.fixedtool li').eq(0).siblings().removeClass('current');
        }
        $('.floor .w').each(function(i,ele){
            var toop=$(ele).offset().top;
           
            if($(document).scrollTop()>=toop)
            {
                $('.fixedtool li').eq(i+1).addClass('current');
                $('.fixedtool li').eq(i+1).siblings().removeClass('current');
            }
        })
       }
       
   });
   $('.fixedtool li').click(function(){
       flag=false;
       $(this).addClass('current');
       $(this).siblings().removeClass('current');
    var index = $('.floor .w').eq($(this).index()).offset().top;
    console.log(index);
   $('html,body').stop().animate({
       scrollTop:index
   },function(){
       flag=true;
   });
});

});