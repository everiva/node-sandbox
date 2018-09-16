module.exports = (
    function () {
        var policy = {
            policyHolder: {
                name: 'Alex',
                age: Math.ceil(Math.random() * 100)
            },
            coverage: {
                tariff: Math.random() / 100,
                sumInsured: Math.random() * 10000

            },
            calculatePremium: function () {
                var i = policy.coverage;
                var premium = Math.floor(i.tariff * i.sumInsured);
                return premium;
            },
            printPolicy: function () {
                var k = policy.policyHolder;
                var output = `Policyholder ${k.name} is ${k.age} years old should pay ${policy.calculatePremium()} USD`;
                console.log(output);
            }

        }
        return policy
    }

)();