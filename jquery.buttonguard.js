if(typeof jQuery === 'undefined') {
	throw new Error('Buttonguard requires jQuery');
}

+function($) {

	$.fn.buttonguard = function(options) {

		var settings = $.extend({
			newHtml: 'Confirm'
		}, options);

		var btn = this;
		var oldHtml = btn.html();

		this.attr('type', 'button');
		return this.click(function(event) {

			if(btn.attr('type') == 'button') {
				event.preventDefault();
			}

			btn.html(settings.newHtml).attr('type', 'submit');

			if(typeof jQuery.ui !== 'undefined' && settings.oldClass && settings.newClass) {
				btn.switchClass(settings.oldClass, settings.newClass);
			}

			if(settings.duration) {
				window.setTimeout(function() {

					btn.html(oldHtml).attr('type', 'button');

					if(typeof jQuery.ui !== 'undefined' && settings.oldClass && settings.newClass) {
						btn.switchClass(settings.newClass, settings.oldClass);
					}
				}, settings.duration);
			}
		});
	}
}(jQuery);
