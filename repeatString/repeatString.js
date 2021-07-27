const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let string_to_repeat = "";
            for (let i = 0; i < num; i++) {
            string_to_repeat += string;
        };
        return string_to_repeat;
    };
};

console.log(repeatString('hey', -1))
module.exports = repeatString;
