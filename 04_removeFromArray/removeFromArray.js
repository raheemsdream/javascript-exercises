const removeFromArray = function(array, ...value) {
   return array.filter(ele => !value.includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
