let reverseString = (str) => {
    let tempStr = '';
    for(let i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

let getTechnologies = () => {
    let tech = ['html','css','JavaScript','Bootstrap'];
    return tech;
};

module.exports = {
    reverseString,
    getTechnologies
};