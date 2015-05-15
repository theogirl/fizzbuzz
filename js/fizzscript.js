$(document).ready(function() {	

	$('input').focus();
	$('.answer').hide();

	$('input').keydown(function(event) {
		if (event.which == 13) {
		var value = $(this).val();
			if (value === '') {
				alert('Please enter a number!');
			}
			else if (isNaN(value)) {
				alert('Please enter an actual number!');
				$(this).val(''); 
			    $(this).focus(); 
			}
			else if ((value > 101) || (value < 1)) {
				alert('Choose a number between 1 and 100 please!')
				$(this).val(''); 
			    $(this).focus(); 
			}
			else {
				$('.answer').show();
			
				if ((value%3 === 0) && (value%5 === 0)) {
					$('.response').text('\"FIZZ BUZZ!\"').css('color', 'red');
				}
				else if (value%3 === 0) {
					$('.response').text('\"Fizz\"').css('color', 'blue');
				}
				else if (value%5 === 0) {
					$('.response').text('\"Buzz\"').css('color', 'green');
				}
				else {
					$('.response').text(value).css('color', 'black');
				}
				$(this).val(''); //passes an empty string to input field
			    $(this).focus(); //returns the focus to this field
			}

		}
	}) // end keydown on input

}); // end document ready