const removeFromArray = function(array, toRemove) {
    let args = Array.from(arguments);
    
    for (i = 1; i < args.length; i++){
        let index = array.indexOf(args[i])
        if (index !== -1) {
            array.splice(index, 1);
        };
    };
    return array;
};

console.log(removeFromArray([1, 2, 3, 4], "hi" ))
module.exports = removeFromArray;
