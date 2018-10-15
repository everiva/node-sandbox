/*
1. Список товаров: название, стоимость;
3. Показать все товары;
4. Добавление товаров;
5. Удаление товаров;
6. Выбор по цене или названию
7. Учетная запись покупателя; // пока не делать
*/

module.exports = (() => {
    let goods = [
        {
            id: 1,
            product: 'bread',
            price: 11.11
        },
        {
            id: 2,
            product: 'cheese',
            price: 12.12
        },
        {
            id: 3,
            product: 'avocado',
            price: 13.13
        },
        {
            id: 4,
            product: 'tomato',
            price: 14.14
        },
        {
            id: 5,
            product: 'cheese',
            price: 12.12
        }
    ];

    let deleteGoodsByName = (name) => {
        // find a good by Name and since filter must return 
        // array as a result but we need only the object element 
        // we are using [0] in order to return first element 
        // from the result array 
        let filteredArray = goods.filter(a => a.product == name);        
        // check if we found something
        if (filteredArray.length > 0) {
            for(let i=0;i<filteredArray.length;i++) {
                goods.splice(filteredArray[i].id-(i+1),1)
            }            
        }
         
    };
    
    
    let addGood = (name, price) => {
        goods.push({
            id: ++goods.length, //goods[goods.length-1].id+1,
            product: name,
            price: price
        })
    };

   

    let deleteGoodByName = (name)  => {
        let filteredArray = goods.filter(a => a.product == name);
        if (filteredArray[0]) {
            let el = filteredArray[0];
            goods.splice(el.id-1,1)
        }
         
    }

    let deleteGoodById = (id) => {
        goods.splice(goods[id-1],1)
         
    };

    let editGoodById = (name, price) => {
        goods.product = name || goods.product;
        goods.price = price || goods.price;
         
    };

    let selectGoods = () => {
        goods.forEach(value=>
            console.log(`${value.id}. Product: ${value.product} \t Price: ${value.price}`))
    };



    return {addGood, selectGoods, editGoodById, deleteGoodsByName, deleteGoodByName, deleteGoodById }
}
)()

/*

objects, arrays

object (understanding in and of operators)

basic types and parsing (number, string, boolean, arrays)

conditional operators (if .. else, switch .. case)
loops (for ..)

arithmentic operators (++, --, +=, *= .....)

logical oerations( ==, >, >=, !=, .....)


let
const

*/