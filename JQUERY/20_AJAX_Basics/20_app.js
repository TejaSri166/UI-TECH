let tableBody = $('#table_body');

// JQuery AJAX button
$('#JQuery-ajax').click(function() {

    $.ajax({
        method : 'GET',
        url : https://api.myjson.com/bins/14ipuo,
        success : function(data) {
            processData(data,'bg-primary');
        }
    });
});

// JavaScript AJAX button
$('#JavaScript-ajax').click(function() {

    //Create a AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/14ipuo',true);

    // send the AJAX Request
    http.send();

    // Handle the AJAX Request
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200){
             processData(http.responseText , 'bg-success');
        }
    };

});

// process the data
let processData = (data , color) => {
    let employees = JSON.parse(data);
    displayTheData(employees , color);
};

// display Table Data
let displayTheData = (employees , color) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr class=" ${color} text-white">
                          <td>${employee.id}</td>
                          <td>${employee.first_name}</td>
                          <td>${employee.last_name}</td>
                          <td>${employee.email}</td>
                          <td>${employee.gender}</td>
                          <td>${employee.country}</td>
                          <td>${employee.state}</td>
                          <td>
                                <img src="${employee.photo}" class="img-fluid"</td>
                      </tr> \n`;
    });
    tableBody.empty().append(tableRows);
};