/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
	$("#order-form").submit(function() { //check for validation on submit
		var abort = false; //if any input fields not filled out, abort the subission
		$("div.error").remove(); //remove error divs on refresh
		$(':input[required]').each(function(){ //check 'required' attributes only
			if ($(this).val()==='') { //if current field is empty...
				abort = true; //...abort if not filled out
			}
		});
		
		if (abort) {return false;} else {return true;} //
		
        });
	$('#order-form').validate({
		"rules" : {
			"#your-name": {
			required: true,
			digits: false,
			maxlength: 128
			},
			"#your-address": {
			required: true,
			},
			"#your-city": {
			required: true,
			},
			"#your-state": {
			required: true,
			maxlength: 2
			},
			"#your-zip": {
			required: true,
			digits: true,
			maxlength: 5
			},
			"#card-holder-name": {
			required: true,
			digits: false,
			maxlength: 128
			},
			"#card-number": {
			required: true,
			maxlength: 16
			},
			"#expiry-month": {
			required: true,
			},
			"#cvv": {
			required: true,
			digits: true,
			min: 3, 
			},
			"#shipping-method": {
			required: true,
			},
			"#comments": {
			required: false,
			max: 500
			},
		"messages" : {
			name: "Please enter your first and last name"
		}	
		}
	});
});