$( function() {

    // init profile-tabs
    if($('.profile-tabs').length) {
        $( '.profile-tabs' ).tabs(); 
    }

    // init login-tabs
    if($('.login-tabs').length) {
        $( '.login-tabs' ).tabs(); 
    }

    // init scrollbar
    if($('.scrollbar-inner').length) {
        $( '.scrollbar-inner' ).scrollbar(); 
    }

    // init form styler
    if($('.select-styler').length) {
        $( '.select-styler' ).styler(); 
    }
} );




