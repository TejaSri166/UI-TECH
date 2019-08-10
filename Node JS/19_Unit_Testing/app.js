let sayHello = () => {
    return "Hello";
};

let addNumbers = (a , b) => {
    return a + b;
};

let reverseString = (str) => {
    let tempStr = '';
    for(let i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

module.exports = {
    sayHello,
    addNumbers,
    reverseString
};