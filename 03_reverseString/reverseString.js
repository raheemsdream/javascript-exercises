const reverseString = function(string) {
    let reversedString = '';
    for (i=string.length-1; i > -1 ; i--){
        reversedString = reversedString + string[i];
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
