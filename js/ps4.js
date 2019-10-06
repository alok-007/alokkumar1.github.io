$(function(){
    new WOW().init();
});

$(function(){
    $(".smooth-scrolling").click(function(event){
        event.preventDefault();
        
        $("html,body").animate({
            scrollTop:$("#background").offset().top
        },1250);
    })
})