const _ = require('lodash');

let array = ['html',656,'javascript',65456,5464,'test',654654];
let employees=[{name:'Rajan',age:40,designation:'Business Manager',active:!0},
    {name:'John',age:35,designation:'Project Manager',active:!1},
    {name:'Wilson',age:25,designation:'Software Engineer',active:!0},
    {name:'Naveen',age:23,designation:'Software Trainee',active:!1}];

let countEach = (array) => {
    let strCount = 0;
    let numCount = 0;
    _.forEach(array,(value) => {
        _.isString(value)? strCount++ : strCount;
        _.isNumber(value)? numCount++ : numCount;
    });
    return {
        strCount : strCount,
        numCount : numCount
    };
};

console.log(countEach(array));


let activeEmployees = _.filter(employees, (emp) => {
    return emp.active;
});
console.log(activeEmployees);

let seniorEmployees = _.filter(employees,(emp) => {
    return emp.age >= 35;
});
console.log(seniorEmployees);

