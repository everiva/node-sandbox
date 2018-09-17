module.exports = (function () {
    let policy = {
        policyHolder: {
            name: 'Alex',
            age: Math.ceil(Math.random() * 100)
        },
        coverage: {
            tariff: Math.random() / 1000,
            sumInsured: Math.floor(Math.random() * 10000),
        },
        calculatePremium: function () {
            var premium = Math.floor(policy.coverage.tariff * policy.coverage.sumInsured);
            return premium;
        },
        print: function () {
            var output = `Policyholder ${policy.policyHolder.name} is ${policy.policyHolder.age} years old should pay ${policy.calculatePremium()} USD`;
            console.log(output);
        }
    }
    return {
        print: policy.print
    } 
})();