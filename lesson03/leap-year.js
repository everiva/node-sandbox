/* 
This is an algorithm that determines whether the given year is leap or common.

if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
*/

module.exports = (function () {
/*
    1. Get year of date of birth
    2. Declare boolean variable 'isLeap'
    3. Using the algorithm on the top determine leapness of the year
    4. Return to the console the result string

    Hint: division by number is checking with % (remind operator). Result of usage this operator should be equals zero.
    usage: 
    var x = 4;
    var y = 2;
    var z = x % y;

*/
    let isLeap = function (dateOfBirth) {
        console.log(dateOfBirth);
    }
    return { isLeap }
})()

