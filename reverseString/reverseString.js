const reverseString = function(string) {
    let arrayFromString = string.split("");
    arrayFromString = arrayFromString.reverse();
    let reversedString = arrayFromString.join("");
    return reversedString;

};

console.log(reverseString('Hello'));

module.exports = reverseString;
