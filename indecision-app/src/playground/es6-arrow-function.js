const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Tai Nguyen'));
console.log(getLastName('Tai Nguyen'));