const convertToCelsius = function(temperatureInFahr) {
  let convertion = (temperatureInFahr - 32) * 5/9;
  let newCelsius = convertion.toFixed(1);
  return Number(newCelsius);
};

const convertToFahrenheit = function(temperatureInCel) {
  let convertion = (temperatureInCel* (9/5)) +32;
  let newFahrenheit = convertion.toFixed(1);
  return Number(newFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
