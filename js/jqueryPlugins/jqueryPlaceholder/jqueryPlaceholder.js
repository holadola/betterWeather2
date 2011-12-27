/*jslint
 adsafe: false, bitwise: true, browser: true, cap: false, newcap: false, css: false,
 debug: false, eqeqeq: true, evil: false, forin: false, fragment: true, laxbreak: true,
 nomen: false, on: false, onevar: false, passfail: false, plusplus: true, regexp: true,
 rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true,
 white: false, widget: false, sloppy: true
 */

/**
 * jQuery globals for jslint
 */
/*global  $, jQuery, escape, unescape, window */

jQuery(function () {
	jQuery.support.placeholder = false;
	test = document.createElement('input');
	if (test.hasOwnProperty('placeholder')) {
	    jQuery.support.placeholder = true;
	}
});

$(function () {
	if (!$.support.placeholder) {
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') !== '' && $(this).val() === $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') !== '' && ($(this).val() === '' || $(this).val() === $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form').submit(function () {
			$(this).find('.hasPlaceholder').each(function () { $(this).val(''); });
		});
	}
});
