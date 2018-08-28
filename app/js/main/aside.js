(function($) {
    const body = $('body');
    const btnOpen = $('.menu-btn');
    const btnClose = $('.menu-btn-close');

    function toggleAside(e) {
        body.toggleClass('show-aside');
    }

    btnOpen.on('click', toggleAside);
    btnClose.on('click', toggleAside);
}(jQuery));

    