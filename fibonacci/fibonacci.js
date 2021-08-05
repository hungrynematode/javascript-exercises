let fibSequence = [1, 1];
for (i = 1; i <= 50; i++ ) {
    let num = fibSequence[i] + fibSequence[i-1];
    fibSequence.push(num);
};
console.log(fibSequence);
const fibonacci = function(num) {
    num = Number(num);
    return num > 0 ? fibSequence[num - 1] : "OOPS";
};

module.exports = fibonacci;
