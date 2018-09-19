let numberModule = require('./lesson01/number')
let calculateAgeModule = require('./lesson02/age')
let checkLeapYear = require('./lesson03/leap-year')

function separator() {
    console.log('');
    console.log('-------------------');
    console.log('');
};

separator();

numberModule.print();

separator();

console.log(numberModule.someThing);

separator();

calculateAgeModule.calcAgeByDateOfBirth('04.07.1984');

separator();

checkLeapYear.yearBirthIsLeap('04.07.1984');


