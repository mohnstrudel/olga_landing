$(document).on('ready', function(){
			//Form
	$('.form-data__input, .form-data__textarea').on("change keyup input", function () {
	    if($(this).val().length > 0) {
	        $(this).closest('.form-data__parametr').removeClass('error');
	    }
	});

	$('.form-data .checkbox__input').on("change keyup input", function () {
	    if ($(this).is(':checked')) {
	        $(this).closest('.error').removeClass('error');
	    }
	});
});