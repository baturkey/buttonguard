if(typeof jQuery === 'undefined')
{
	throw new Error('Buttonguard requires jQuery')
}

+function($) {
	$.fn.buttonguard = function(options)
	{
        var settings = $.extend({
			oldClass: 'btn-primary',
			newClass: 'btn-danger',
			duration: 5000,
			newText:  'Confirm'
        }, options);

		var btn = this;
		var old = btn.html();

		return this.click(function() {
			btn.attr('type', 'button').switchClass(settings.oldClass, settings.newClass, 400, 'swing', function() {
				btn.html(settings.newText).attr('type', 'submit')
			});
			window.setTimeout(function() {
				btn.switchClass(settings.newClass, settings.oldClass).html(old).attr('type', 'button');
			}, settings.duration);
		});
	}
}(jQuery);
