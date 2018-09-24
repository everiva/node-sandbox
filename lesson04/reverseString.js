module.exports = (function () {
    /*
There are three ways to reverse string: 
1. Reverse with for loop -> done
2. Reverse with build-in method for string object -> TBD
3. Reverse with recursion  -> TBD
*/
    let reverseStringWithLoop = (originalString) => {
        /* 
        1. Get original string
        2. Reverse it
        3. Pass the result to the console
        */

        let reversedString = '';
        for (let i = originalString.length - 1; i >= 0; i--) {
            reversedString += originalString.charAt(i)
        }
        console.log(reversedString);
    }

    let reversedStringWithBuildInFunctions = (originalString) => {
        let result = originalString.split('').reverse().join('');
        console.log(result)
    }

    let reverseStringRecursivly = (originalString) => {
        
    }

    return { reverseStringWithLoop, reversedStringWithBuildInFunctions, reverseStringRecursivly }
})()

