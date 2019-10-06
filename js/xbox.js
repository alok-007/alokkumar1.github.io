
        $(function(){
    $("a.smooth-scrolling").click(function(event){
        event.preventDefault();
        var scroll = $(this).attr("href")
        $("html,body").animate({
            scrollTop:$(scroll).offset().top
        },1250);
    })
})
   
  
$(function(){
    new WOW().init();
});