$.validator.setDefaults( {
    submitHandler: function () {
        $('#modal').modal('show');
    }
} );

$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength : 5
        },
        lastname : {
            required : true,
            minlength : 5
        },
        username : {
            required : true,
            minlength : 5
        },
        email : {
            required : true,
            email:true
        },
        password : {
            required : true,
            minlength : 5
        },
        c_password : {
            required : true,
            minlength : 5,
            equalTo : '#password'
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstname : {
            required : 'Please Enter the First Name',
            minlength : 'Please Enter min 5 letters'
        },
        lastname : {
            required : 'Please Enter the Last Name',
            minlength : 'Please Enter min 5 letters'
        },
        username : {
            required : 'Please Enter the User Name',
            minlength : 'Please Enter min 5 letters'
        },
        email : {
            required : 'Please Enter the an email',
            email:'Please a proper email'
        },
        password : {
            required : 'Please Enter the Password',
            minlength : 'Please Enter min 5 letters'
        },
        c_password : {
            required : 'Please Enter the Confirm Password',
            minlength : 'Please Enter min 5 letters',
            equalTo : 'Both the passwords are not matched'
        },
        terms : {
            required : 'Please accept the Licence'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});