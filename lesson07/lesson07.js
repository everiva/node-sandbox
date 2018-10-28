/*
Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is Tuesday. 
Current time is 10 PM : 30 : 38
*/

module.exports = (() => {
    let now = new Date();
    let currentDate = () => {
        let numberDayOfWeek = now.getDay();
        return numberDayOfWeek
    };
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Friday', 'Saterday']
    let today = (numberDayOfWeek) => {

        daysOfWeek.forEach((value, index) => {
            if (index == numberDayOfWeek) {
                console.log(`Today is ${value}. Current time is ${hour} : ${minutes} : ${seconds}`)
            }
        })
    };

    return { currentDate, today }
}
)()