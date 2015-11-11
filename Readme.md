# Buttonguard

Requires
* JQuery
* JQuery UI

Buttonguard is a JQuery plugin that makes users click a button twice to submit a form

## Options

| Option   | Default Value | Description                  |
|----------|---------------|------------------------------|
| oldClass | btn-primary   | The CSS class to change from |

* newClass

default: 'btn-danger'

The CSS class to change to

* duration

default: 5000

The length of time the button will be active after the first click

* newText

default:  'Confirm'

What the button will say after the first click

## Usage example
````html
<button class="btn btn-primary" id="AButton">Hi</button>
````
````javascript
$(function() {
	$("#AButton").buttonguard();
});
````
