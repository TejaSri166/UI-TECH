let wishMe = () => {
    return "Good Morning";
};

let addNumbers = (a , b) => {
    return a + b;
};

let createStudent = () => {
    let student = {
        name : 'Rajan',
        age : 22,
        course : 'Engineering'
    };
    return student;
};

module.exports = {
    wishMe,
    addNumbers,
    createStudent
};