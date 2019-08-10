let tableBody = $('#table_body');
let employeesArray = [];

// JQuery AJAX button
$('#JQuery-ajax').click(function() {

    /*$.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/12qf1c',
        success : function(data) {
            let theStr = JSON.stringify(data);
            processData(theStr,'bg-primary');
        }
    });*/

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data.results[0]);
            employeesArray.push(data.results[0]);
            displayTheNewData(employeesArray,'bg-primary');
        }
    });
});

// JavaScript AJAX button
$('#JavaScript-ajax').click(function() {

    //Create a AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/12qf1c',true);

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
                          <td>
                            <img src="${employee.photo}" class="img-fluid w-25 img-thumbnail rounded-circle">
                          </td>
                          <td>${employee.first_name}</td>
                          <td>${employee.last_name}</td>
                          <td>${employee.email}</td>
                          <td>${employee.gender}</td>
                          <td>${employee.country}</td>
                          <td>${employee.state}</td>
                      </tr> \n`;
    });
    tableBody.empty().append(tableRows);
};

// display Table Data
let displayTheNewData = (employees , color) => {
    let tableRows = '';
    employees.forEach((employee) => {
        tableRows += `<tr class=" ${color} text-white">
                          <td>
                            <img src="${employee.picture.large}" class="img-fluid">
                          </td>
                          <td>${employee.name.first}</td>
                          <td>${employee.name.last}</td>
                          <td>${employee.email}</td>
                          <td>${employee.gender}</td>
                          <td>${employee.location.city}</td>
                          <td>${employee.location.state}</td>
                      </tr> \n`;
    });
    tableBody.empty().append(tableRows);
};

