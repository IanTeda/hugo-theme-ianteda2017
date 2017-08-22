"use strict";

/* globals jQuery, document */
(function ($, undefined) {

    var $document = $(document);

    $document.ready(function () {
        $(".scroll-down").arcticScroll();

        // Initialize collapse button
        $(".button-collapse").sideNav({
            edge: 'right', // Choose the horizontal origin
        });
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        //$('.collapsible').collapsible();

        $(".menu-button, .nav-cover, .nav-close").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arcticScroll = function (options) {
        var defaults = {
                elem: $(this),
                speed: 500
            },

            allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top + toMove)
                }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({
                    scrollTop: toMove
                }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({
                    scrollTop: ($(this.hash).offset().top)
                }, allOptions.speed);
            }
        });
    };
})(jQuery);

fitvids();