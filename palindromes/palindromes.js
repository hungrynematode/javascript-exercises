const palindromes = function (string) {
    let forward = string.toLowerCase().split('');
    let backward = string.toLowerCase().split('').reverse();
    
    forward = forward.join('');
    backward = backward.join('');

    forward = forward.replace(/[.,/#!$%^&*;:{}=-_`~()\s]/g, "");
    backward = backward.replace(/[.,/#!$%^&*;:{}=-_`~()\s]/g, "");

    return forward === backward ?  true : false;
};

console.log(palindromes('RaCEcar!!'));
module.exports = palindromes;
