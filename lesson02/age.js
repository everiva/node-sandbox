module.exports = (function () {
    let coeff = {
        earth: 1,
        mercury: 365 / 88,
        mars: 365 / 687
    }
    let calcAge = function (earthAge) {
        let marsAge = Math.floor(earthAge * coeff.mars);
        console.log(`Your age on Earth is ${earthAge}`);
        console.log(`Your age on Mars is ${marsAge}`);
    }
    return { calcAge }

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

