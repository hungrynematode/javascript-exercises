const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  celsius = Number(celsius.toFixed(1));
  return celsius;
};

const ctof = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  fahrenheit = Number(fahrenheit.toFixed(1));
  return fahrenheit;
};

console.log(ftoc(100));
module.exports = {
  ftoc,
  ctof
};
