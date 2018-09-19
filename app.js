let numberModule = require('./lesson01/number')
let calculateAgeModule = require('./lesson02/age')

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


