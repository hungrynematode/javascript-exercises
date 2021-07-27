const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number" ) {
        return "ERROR"
    } else { 
        if (num1 < num2) {
            for (i = num1; i <= num2; i++) {
                sum += i;
            };
        } else {
            for (i = num1; i >= num2; i--) {
                sum += i;
            };
        };
    };
    return sum;
};

console.log(sumAll("hi", 1));
module.exports = sumAll;
