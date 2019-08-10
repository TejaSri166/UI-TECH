// Arrays , objects , functions
let employees = [
    {
        name : 'Rajan',
        age : 40,
        designation : 'Business Manager',
        active : true
    },
    {
        name : 'John',
        age : 35,
        designation : 'Project Manager',
        active : false
    },
    {
        name : 'Wilson',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Naveen',
        age : 23,
        designation : 'Software Trainee',
        active : false
    }
];

let seniorEmployees = employees.filter((employee) => {
    return employee.age >= 35;
});
console.log(seniorEmployees);