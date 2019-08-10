//Get the HTML Elements
let cardHeader = $('#form-card-header');
let cardTitle = $('#card-title');
let theButton = $('#submit-button');


// Login Button
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardTitle.text('Login Here');
    theButton.removeClass('btn-teal').removeClass('bg-warning')
                         .addClass('btn-success').text('Login');
});

// Register Button


// Signup Button