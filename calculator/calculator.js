const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((multiplied, num) => multiplied * num, 1);
}

const power = function(num, power) {
	result = num;
  for(i = 1; i < power; i++) {
    result = result * num;
  };
  return result;
};

const factorial = function(num) {
	result = num;
  if(num < 2) {
    return 1;
  } else {
    for(i = (num - 1); i > 0; i--) {
      result = result * i;
    };
  };
  return result;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
