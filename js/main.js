/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	// set js breakpoints for site
	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// responsive triggers
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			// $body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

	// style canvas gradients
	var granimInstance = new Granim({
	    element: '#canvas-gradient',
	    name: 'basic-gradient',
	    direction: 'left-right',
	    opacity: [1, 1],
	    isPausedWhenNotInView: true,
	    states : {
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
	});

	//ios fix for css vh units
	var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
	
	if(iOS){

	    function iosVhHeightBug() {
	        var height = $(window).height();
	        $(".content-block").css('min-height', height);
	    }

	    iosVhHeightBug();
	    $(window).bind('resize', iosVhHeightBug);

	}  

})(jQuery);
