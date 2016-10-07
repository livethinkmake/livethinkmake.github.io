//= require jquery-3.1.0.min
//= require jquery.scrollex.min
//= require jquery.scrolly.min
//= require skel.min
//= require util
//= require granim.min
//= require animatedGeometry

/*
    Spectral by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function ($, skel, window, document, undefined) {
    var $window = $(window),
        $body = $('body'),
        $banner = $('#intro-banner'),
        granimInstance;

    var config = {
        breakpoints: {
            xlarge: '(max-width: 1680px)',
            large:  '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small:  '(max-width: 736px)',
            xsmall: '(max-width: 480px)'
        },
        granim: {
            element: '#canvas-gradient',
            name: 'basic-gradient',
            direction: 'left-right',
            opacity: [1, 1],
            isPausedWhenNotInView: true,
            states: {
                "default-state": {
                    gradients: [
                        ["#00d2ff", "#3a7bd5"],
                        ["#4776E6", "#8E54E9"],
                        ["#000428", "#004e92"],
                        ["#FF512F", "#DD2476"],
                        ["#fd746c", "#ff9068"],
                        ["#6a3093", "#a044ff"],
                        ["#76b852", "#8DC26F"],
                        ["#005C97", "#363795"]
                    ]
                }
            }
        }
    };

    function setupResponsiveTriggers() {
        if (skel.vars.mobile) {
            $body.addClass('is-mobile');
        } else {
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });
        }
    }

    function ready() {
        $banner.addClass('animate');
    }

    $window.on('load', function () {
        setTimeout(ready, 100);
    });

    skel.breakpoints(config.breakpoints);
    setupResponsiveTriggers();
    new Granim(config.granim);
    animateCanvas('canvas-animated');
})(jQuery, skel, window, document);
