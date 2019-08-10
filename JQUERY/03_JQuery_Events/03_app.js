
// Click Event
$('#green-btn').click(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('DELETE');
});

// DBLClick Event
$('#red-btn').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('REGISTER');
});

// Toggle Button
let count = 0;
$('#blue-btn').click(function() {
    if(count %2 === 0){
        $(this).removeClass('btn-primary').addClass('btn-success').text('Login');
        count++;
    }
    else{
        $(this).removeClass('btn-success').addClass('btn-primary').text('Register');
        count++;
    }
});

// hover a button
$('#orange-btn').hover(function() {
    $('#modal').modal('show');
});

// Focus on a text box
$('input[type="text"]').focus(function () {
    $('#modal').modal('show');
});