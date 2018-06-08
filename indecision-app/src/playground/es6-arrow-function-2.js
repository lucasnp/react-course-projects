const multiplers = {
    numbers: [1, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy;
        });
    }
};

console.log(multiplers.multiply());