$(window).on('load', function () {
    $('#go-brief').click(function () {
        $('html,body').animate({
            scrollTop: $("#brief").offset().top
        }, 900);
    });
});

$(window).on('load', function () {
    $('#go-js-sort').click(function () {
        $('html,body').animate({
            scrollTop: $("#js-sort").offset().top
        }, 900);
    });
});

$(window).on('load', function () {
    $('#go-main').click(function () {
        $('html,body').animate({
            scrollTop: $("#main").offset().top
        }, 900);
    });

});

$(window).on('load', function () {
    $('#go-project-euler').click(function () {
        $('html,body').animate({
            scrollTop: $("#project-euler").offset().top
        }, 900);
    });

});

$(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
        $('.page-header').css({
            'top': -scrolled * .5
        });
    }
});