'use strict';

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getLastName = function getLastName(fullName) {
    return fullName.split(' ')[1];
};

console.log(getFirstName('Tai Nguyen'));
console.log(getLastName('Tai Nguyen'));
