module.exports = (function () {
    let goods = [
        {
            name: 'Kid toy',
            price: 123.33
        },
        {
            name: 'Eggs',
            price: 3232.43
        },
        {
            name: 'Milk',
            price: 2.55
        },
        {
            name: 'Yogurt',
            price: 65.54
        },
        {
            name: 'Ball',
            price: 545.33
        },
        {
            name: 'Hat',
            price: 54.55
        },
        {
            name: 'Cheese',
            price: 66.38
        },
        {
            name: 'Bread',
            price: 69.19
        },
        {
            name: 'Trousers',
            price: 35.67
        },
        {
            name: 'Pyjamas',
            price: 54.57
        }
    ];

    function print(value) {
        console.log(value);
    }

    let printGoods = (goods) => {
        // output with forEach
        goods.forEach((item, idx) => {
            print(`${idx + 1}. Name: ${item.name} \t Price: ${item.price}`)
        })
        print('')
    };

    printGoods(goods)

    // forEach
    // increase price of all goods up to 50
    goods.forEach((value) => {
        value.price += 50;
    });

    printGoods(goods)

    // filter

    printGoods(goods.filter(value => value.price > 500
    ))

    // map
    let namesOfGoods = goods.map(value => value.name)
    console.log(namesOfGoods)

    //some little practise


    console.log(array.length)
    console.log(array[1])
    console.log(array.push('someThing'))
    console.log(array)
    console.log(array.pop('someThing'))
    console.log(array)


    let each = function () {
        var fruits = ['Apple', 'Banana'];
        fruits.forEach(function (item, index, array) {
            console.log(item, index);
        });
    }
    var fruits = ['Apple', 'Banana'];
    fruits.forEach(function (item, index, array) {
        console.log(item, index);
    });



    return { 
        goods,
        printGoods
    }
})()

