# Buttonguard

Buttonguard is a JQuery plugin that makes users click a button twice to submit a form

## Requires
* JQuery
* JQuery UI

## Options

| Option   | Default Value | Description                                                                   |
|----------|---------------|-------------------------------------------------------------------------------|
| oldClass | btn-primary   | The CSS class to change from                                                  |
| newClass | btn-danger    | The CSS class to change to                                                    |
| duration | 5000          | The length of time in ms that the button will be active after the first click |
| newText  | Confirm       | What the button will say after the first click                                |

## Usage example
````html
<button class="btn btn-primary" id="AButton">Hi</button>
````
````javascript
$(function() {
	$("#AButton").buttonguard();
});
````
