module.exports = (function () {   
    let coeff = {
        earth: 1,
        mercury: 365 / 88,
        mars: 365 / 687,
        venus: 365 / 225
    }
    let calcAge = function (earthAge) {
        let marsAge = Math.floor(earthAge * coeff.mars);
        let venusAge = Math.floor(earthAge * coeff.venus);
        let mercuryAge = Math.floor(earthAge * coeff.mercury);
        console.log(`Your age on Earth is ${earthAge}`);
        console.log(`Your age on Mars is ${marsAge}`);
        console.log(`Your age on Venus is ${venusAge}`);
        console.log(`Your age on Mercury is ${mercuryAge}`);
    }
    let calcAgeByDateOfBirth = function (dateOfBirth) {
        // 1. Parse string to Date 
        // 2. Get year from the date
        // 3. Subtraction given year from the current one

        let age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
        calcAge(age);
         
    }
    return { calcAgeByDateOfBirth }

})();

/* ----- transfer function as a value
1) let i = {
    j: function(){

    }
}

2) let m = function(){

}
*/

/* -----function definition

3) function nameFunction(parameters) {
            //FUNCTION BODY
            return 
}


----- arrow function
4) let i = {
    j: (parameters) => {
           //FUNCTION BODY
           return 
    }
}

5) let m = () => {

}


*/

