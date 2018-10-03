/*
1. Список товаров: название, стоимость;
2. Учетная запись покупателя; // пока не делать
3. Показать все товары;
4. Добавление товаров;
5. Удаление товаров;
6. Выбор по цене или названию
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
    ];

    let addGood = () => {

    };

    let deleteGood = () => {
    };

    let editGood = () => {

    };

    let selectGoods = () => {
        goods.forEach(value=>
            console.log(`${value.id}. Product: ${value.product} \t Price: ${value.price}`))
    };

    return { editGood, addGood, deleteGood, selectGoods }
}
)()