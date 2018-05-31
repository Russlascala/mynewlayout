/* https://github.com/fuzzywalrus/Bootstrap---JQuery-Cycle--Responsive-Slide-Show-.git */

/* Responsive Cycle for the images */
$(document).ready(function () {
    //JQuery Cycle code
    $('#slideshow').after('<ul id="pager">').cycle({
        fx: 'fade',
        //prev: '#prev',
        //next: '#next',
        //pager:  '#pager',
        containerResize: 0,
        width: '100%',
        fit: 1,
        pagerAnchorBuilder: function (idx, el) {
            return '<li><a href="cpage_7#"></a></li>';
        }
    });
});

/* Responsive Cycle for the text */
$(document).ready(function () {
    //JQuery Cycle code
    $('.tagTxt').after('<ul id="pager">').cycle({
        fx: 'fade',
        //prev: '#prev',
        //next: '#next',
        //pager:  '#pager',
        containerResize: 0,
        width: '100%',
        fit: 1,
        pagerAnchorBuilder: function (idx, el) {
            return '<li><a href="cpage_7#"></a></li>';
        }
    });
});

/*
//non responsive text slider
$(document).ready(function () {
    if ($('.tagTxt').length) {
        $('.tagTxt').cycle();
    }
});
*/