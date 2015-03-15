$(function () {
  var s = $("#top");
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (windowpos >= 650) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});
