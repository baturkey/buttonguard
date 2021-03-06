# Buttonguard

Buttonguard is a JQuery plugin that makes users click a button twice to submit a form

![Example](https://github.com/baturkey/buttonguard/blob/master/example.gif "Example")

## Requires
* [JQuery](http://jquery.com/)
* (Optional) [JQuery UI](http://jqueryui.com/) for class transition

## Options

| Option   | Default Value | Description                                                                                                           |
|----------|---------------|-----------------------------------------------------------------------------------------------------------------------|
| newHtml  | Confirm       | What the button will display after being clicked                                                                      |
| oldClass |               | The CSS class to change from. newClass also needs to be set                                                           |
| newClass |               | The CSS class to change to. oldClass also needs to be set                                                             |
| duration |               | The length of time in ms that the button will be active after the first click. If not set the button will stay active |

## Usage example
````html
<button class="btn btn-primary" id="AButton">Click</button>
````
````javascript
$(function() {
	$("#AButton").buttonguard({
		duration: 5000,
		oldClass: 'btn-primary',
		newClass: 'btn-danger'
	});
});
````
