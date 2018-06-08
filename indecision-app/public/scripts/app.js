"use strict";

var multiplers = {
    numbers: [1, 6],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplers.multiply());
