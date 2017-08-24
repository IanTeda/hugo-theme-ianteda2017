/* globals jQuery, document */
(function ($, undefined) {
    var $document = $(document);

    $document.ready(function() {
        // Initialize collapse button
        $('.button-collapse').sideNav({
            edge: 'right',
        });
    });
})(jQuery);
