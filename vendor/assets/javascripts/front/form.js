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

var validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var validatePhone = function(phone) {
    var re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{3,10}$/;
    return re.test(phone);
};

$('.js-form-feedback').submit(function(e){
    var form = this;
    var error = 0;

    var phone = $(this).find('input[name*="phone"]'),
        email = $(this).find('input[name*="email"]'),
        required = $(this).find('[data-required]'),
        check = $(this).find('[data-check]');

    required.each(function () {
        var value = $(this).val().length;

        if (value === 0) {
            $(this).closest('.form-data__parametr').removeClass('validated').addClass('error');
            ++error;
        } else {
            $(this).closest('.form-data__parametr').removeClass('error').addClass('validated');
        }
    });

    if (phone.length) {
        if ( !validatePhone(phone.val()) ) {
            phone.closest('.form-data__parametr').removeClass('validated').addClass('error');
            ++error;
        } else{
            phone.closest('.form-data__parametr').removeClass('error').addClass('validated');
        }
    }

    if(email.length) {
        if (!validateEmail(email.val())) {
            email.closest('.form-data__parametr').removeClass('validated').addClass('error');
            ++error;
        } else {
            email.closest('.form-data__parametr').removeClass('error').addClass('validated');
        }
    }

    if(check.length) {
        if (!check.is(':checked')) {
            check.closest('.form-data__parametr').removeClass('validated').addClass('error');
            ++error;
        } else {
            check.closest('.form-data__parametr').removeClass('error').addClass('validated');
        }
    }

    if (error) {
        e.preventDefault();

    } else {
        $(this).find('.error').removeClass('error');

        e.preventDefault();

        $(this).closest('.js-feedback-form').find('.js-feedback-success').addClass('open');

        setTimeout(function () {
            form.reset();
        },300)
    }
});