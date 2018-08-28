'use strict';

(function ($) {
    var body = $('body');
    var btnOpen = $('.menu-btn');
    var btnClose = $('.menu-btn-close');

    function toggleAside(e) {
        body.toggleClass('show-aside');
    }

    btnOpen.on('click', toggleAside);
    btnClose.on('click', toggleAside);
})(jQuery);
'use strict';

$(function () {

    // init profile-tabs
    if ($('.profile-tabs').length) {
        $('.profile-tabs').tabs();
    }

    // init login-tabs
    if ($('.login-tabs').length) {
        $('.login-tabs').tabs();
    }

    // init scrollbar
    if ($('.scrollbar-inner').length) {
        $('.scrollbar-inner').scrollbar();
    }

    // init form styler
    if ($('.select-styler').length) {
        $('.select-styler').styler();
    }
});