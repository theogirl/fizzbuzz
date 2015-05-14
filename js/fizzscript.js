$(document).ready(function() {	

	$('input').focus();
	$('.answer').hide();

	$('input').keydown(function(event) {
		if (event.which == 13) {
		var value = $(this).val();
			if (value === '') {
				alert('Please enter a number!');
			}
			if (isNaN(value)) {
				alert('Please enter an actual number!');
				$(this).val(''); 
			    $(this).focus(); 
			}
			if (value > 101) {
				alert('I said choose a number between 1 and 100 please!')
				$(this).val(''); 
			    $(this).focus(); 
			}
			else {
				$('.answer').show();
			
				if ((value%3 === 0) && (value%5 === 0)) {
					$('.response').text('fizzbuzz');
				}
				else if (value%3 === 0) {
					$('.response').text('fizz');
				}
				else if (value%5 === 0) {
					$('.response').text('buzz');
				}
				else {
					$('.response').text(value);
				}
				$(this).val(''); //passes an empty string to input field
			    $(this).focus(); //returns the focus to this field
			}

		}
	}) // end keydown on input

}); // end document ready