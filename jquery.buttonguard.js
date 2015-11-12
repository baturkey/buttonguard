if(typeof jQuery === 'undefined') {
	throw new Error('Buttonguard requires jQuery')
}

+function($) {

	$.fn.buttonguard = function(options) {

		var settings = $.extend({
			newText:  'Confirm'
		}, options);

		var btn = this;
		var old = btn.html();

		return this.attr('type', 'button').click(function(event) {

			if(btn.attr('type') == 'button') {
				event.preventDefault();
			}

			btn.attr('type', 'submit');
			btn.html(settings.newText);

			if(settings.oldClass, settings.newClass) {
				btn.switchClass(settings.oldClass, settings.newClass);
			}

			if(settings.duration) {
				window.setTimeout(function() {
					btn.html(old).attr('type', 'button');
					if(settings.oldClass, settings.newClass) {
						btn.switchClass(settings.newClass, settings.oldClass);
					}
				}, settings.duration);
			}
		});
	}
}(jQuery);
