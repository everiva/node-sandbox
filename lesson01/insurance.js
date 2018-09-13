module.exports = (
    function () {

        var policy = {
            policyHolder: {
                name: 'Alex',
                age: Math.floor(Math.random() * 100)
            },
            coverage: {
                sumInsured: Math.floor(Math.random() * 100000),
                tariff: Math.ceil(Math.random() / 1000)
            },
            calculatePremium: function () {
                var i = policy.coverage;
                var premium = Math.ceil(i.sumInsured * i.tariff);
                return premium;
            },
            printPolicy: function () {
                var ph = policy.policyHolder;
                var output = `Policyholder ${ph.name} is ${ph.age} years old should paid ${policy.calculatePremium()} USD`;
                console.log(output);
            }

        }
        return policy;

    }
)();

