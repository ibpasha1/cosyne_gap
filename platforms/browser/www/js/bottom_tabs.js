var parent, ink, d, x, y;
var style = $('<style>.ink.animate { animation: ' + 'ripple ' + eval(3 / 26000 * $('.bottom_tabs').width() + 557 / 1300) + 's linear' + '!important; }</style>');
$('html > head').append(style);
$(".bottom_tabs").css('background', $(".bottom_tabs > .tab > a.active").attr('data-ripple-color'));
$(".bottom_tabs").attr('data-background-color', $(".bottom_tabs > .tab > a.active").attr('data-ripple-color'));
$(".bottom_tabs > .tab > a.active").find('.material-icons').css({
    'font-size': eval($(".bottom_tabs > .tab > a.active").find('.material-icons').css('font-size').substring(0, $(".bottom_tabs > .tab > a.active").find('.material-icons').css('font-size').indexOf('p')) * 1.07) + 'px'
});

$(".bottom_tabs > .tab > a").click(function(e) {
    $(".material-icons").each(function(index) {
        $(this).css({
            'font-size': '24px'
        });
    });
    $(this).find('.material-icons').animate({
        'font-size': eval($(this).find('.material-icons').css('font-size').substring(0, $(this).find('.material-icons').css('font-size').indexOf('p')) * 1.07) + 'px'
    }, eval(eval(3 / 26000 * $('.bottom_tabs').width() + 557 / 1300) / 4));
    parent = $(this).parent().parent();
    if (parent.find(".ink").length == 0) {
        parent.prepend("<span class='ink'></span>");
    }
    ink = parent.find(".ink");
    ink.removeClass("animate");
    if (!ink.height() && !ink.width()) {
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({
            height: d,
            width: d
        });
    }
    x = e.pageX - parent.offset().left - ink.width() / 2;
    y = e.pageY - parent.offset().top - ink.height() / 2;
    ink.css({
        top: y + 'px',
        left: x + 'px',
        background: $(this).attr('data-ripple-color')
    }).addClass("animate");
    parent.attr('data-background-color', $(this).attr('data-ripple-color'));
});

$("ul.bottom_tabs").bind('oanimationend animationend webkitAnimationEnd', function(e) {
    $(this).css('background', $(this).attr('data-background-color'))
});
