/*
let numberModule = require('./lesson01/number')
let calculateAgeModule = require('./lesson02/age')
let checkLeapYear = require('./lesson03/leap-year')
let lesson04 = require('./lesson04/reverseString')
let lesson05 = require('./lesson05/arrays')

let lesson06 = require('./lesson06/lesson06')

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


lesson06.addGoods();

separator();


lesson06.addGood('hammer', 12.5);
separator();
lesson06.selectGoods();
separator();
console.log('Removing \'вапвап\' from goods list');
lesson06.deleteGoodByName('вапвапв');
separator();
console.log('Removing \'cheese\' from goods list');
lesson06.deleteGoodByName('cheese');
separator();
lesson06.selectGoods();
separator();
console.log('Removing 1st element from goods list');
lesson06.deleteGoodById(1);
separator();
lesson06.selectGoods();
separator();
console.log('Editing price of the 1st element');
lesson06.editGoodById(1, null, 1000);
separator();
lesson06.selectGoods();
*/
/*
debugger;

function addTwo(k) {
    return k +2 
}

function addTwoAdnMultiplySix(d) {
    return addTwo(d) * 6;    
}

console.log(addTwoAdnMultiplySix(5));*/

// 

/*
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
console.log(objB.a);
console.log(foo(obj).a);
console.log(foo(objB).a);

*/

let hometask06 = require('./lesson06/hometask06')


let separator = '------------'
console.log(separator);

hometask06.deleteBreedOfCat('American Bobtail');
console.log(separator);



//hometask06.addBreedOfCat();
//console.log(separator);

//hometask06.showAllCats();
//console.log(separator);


//hometask06.selectBreedOfCats('American Bobtail')


