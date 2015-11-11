# Buttonguard

Requires
* JQuery
* JQuery UI

Buttonguard is a JQuery plugin that makes users click a button twice to submit a form

## Options

* oldClass
default: 'btn-primary'

* newClass
default: 'btn-danger'

*duration
default: 5000
The length of time the button will be active after the first click

*newText
default:  'Confirm'


## Usage example
````html
<button class="btn btn-primary" id="AButton">Hi</button>
````
````javascript
$(function() {
	$("#AButton").buttonguard();
});
````
