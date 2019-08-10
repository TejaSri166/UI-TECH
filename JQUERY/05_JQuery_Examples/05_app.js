
// SMS App
let charCount = 100;
$('#text-area').keyup(function() {
    $('#span').text(charCount - $(this).val().length);
});

// Show Password
$('#check').change(function() {
    let passwordBox = $('#password');
    if(passwordBox.attr('type') === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});


// Triangle One
$('#input-1').keyup(function() {
    let textEntered = $(this).val();
    $('#text-1').text(reverseStr(textEntered));
});

// Triangle Two
$('#input-2').keyup(function() {
    let textEntered = $(this).val();
    $('#text-2').text(triangleTwo(textEntered));
});