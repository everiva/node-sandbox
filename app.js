
let numberModule = require('./lesson01/number')
let calculateAgeModule = require('./lesson02/age')
let checkLeapYear = require('./lesson03/leap-year')
let lesson04 = require('./lesson04/reverseString')
let lesson05 = require('./lesson05/arrays')
let lesson06 = require('./lesson06/lesson06')
let hometask06 = require('./lesson06/hometask06')
let lesson07 = require('./lesson07/lesson07')

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

lesson04.recursion('apple');
separator();

// Select all goods
lesson06.selectGoods();
separator();

// Add new element of array
lesson06.addGood('hammer', 12.5);
separator();

// Select all goods
lesson06.selectGoods();
separator();

// Removing cheese from goods
console.log('Removing \'cheese\' from goods list');
lesson06.deleteGoodByName('cheese');
separator();

lesson06.selectGoods();
separator();

// Remove 1-st element from goods
console.log('Removing 1-st element from goods list');
lesson06.deleteGoodById(1);
separator();


lesson06.selectGoods();
separator();

// Editing price of the 1-st element from 
console.log('Editing price of the 1st element');
lesson06.editGoodById(1, null, 1000);
separator();


lesson06.selectGoods();
separator();

//debugger;


// Example how to use functions 
function addTwo(k) {
    return k + 2 
}

function addTwoAndMultiplySix(d) {
    return addTwo(d) * 6;    
}

console.log(addTwoAndMultiplySix(5));
separator();


// Example how to use function with object
let obj = {
    a: 1,
    b: 'text'
}
let objB = {
    a: 5,
    f: 54
}
function foo(o) {
    if (o.a) o.a += 5;    
    return o;
}
console.log(obj.a);
separator();

console.log(objB.a);
separator();

console.log(foo(obj).a);
separator();

console.log(foo(objB).a);
separator();


hometask06.deleteBreedOfCat('American Bobtail');
separator();


// Select all elements from array
hometask06.showAllCats();
separator();

// Add an element to array
hometask06.addBreedOfCat('1111', 111);
separator();

hometask06.addBreedOfCatMyVariant();
separator();

hometask06.showAllCats();
separator();

// Remove an element from array by name
hometask06.deleteBreedOfCat('American Bobtail');
separator();

hometask06.showAllCats();
separator();


hometask06.editCats('222', 222);
separator();

hometask06.showAllCats();

hometask06.deleteBreedOfCat('Abyssinian')

hometask06.showAllCats();

lesson07.currentDate();

lesson07.today(lesson07.currentDate())
