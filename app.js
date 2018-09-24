let numberModule = require('./lesson01/number')
let calculateAgeModule = require('./lesson02/age')
let checkLeapYear = require('./lesson03/leap-year')
let lesson04 = require('./lesson04/reverseString')

function separator() {
    console.log('');
    console.log('-------------------');
    console.log('');
};

separator();

numberModule.print();

separator();

console.log(numberModule.dayOfWeek);

separator();

console.log(numberModule.someThing);

separator();

calculateAgeModule.calcAgeByDateOfBirth('04.07.1984');

separator();

checkLeapYear.yearBirthIsLeap('04.07.1984');

separator();

lesson04.reverseStringWithLoop('add');

separator();

lesson04.reversedStringWithBuildInFunctions('hello');

separator();

lesson04.reverseStringRecursivly();


    
