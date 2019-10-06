$(window).on('load', function () {
    $("#isotope-container").isotope({});
    $("#isotope-filters").on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });

    });

});

$(function(){
    new WOW().init();
});


$(function(){
    $("a.smooth-scrolling").click(function(event){
        event.preventDefault();
        var scroll = $(this).attr("href")
        $("html,body").animate({
            scrollTop:$(scroll).offset().top
        },1250);
    })
})