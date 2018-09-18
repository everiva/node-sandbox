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

calculateAgeModule.calcAge(34);

separator();

console.log(numberModule.someThing);

separator();


