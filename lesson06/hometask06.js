/* (()=>{})()
/* module.exports = (()=>{})()


/*
1. Список пород кошек: название, страна происхождения, рост;
3. Показать все породы кошек;
4. Добавление пород кошек;
5. Удаление пород кошек;
6. Выбор по стране происхождению или росту
*/

module.exports = (() => {
    let breedsOfCats = [
        {
            breed: 'Abyssinian',
            country: 'Ethiopia',
            height: 111

        },
        {
            breed: 'American Bobtail',
            country: 'United States',
            height: 115

        },
        {
            breed: 'Russian Blue',
            country: 'Russia',
            height: 143

        },
        {
            breed: 'Maine Coon',
            country: 'United States',
            height: 222

        },
        {
            breed: 'Korat',
            country: 'Thailand',
            height: 333
        },
    ];

    let addBreedOfCat = (nameOfBreed, countryOfBreed) => {
        breedsOfCats.unshift(
            {
                breed: nameOfBreed,
                country: countryOfBreed
            }
        )
    };
    let addBreedOfCatMyVariant = () => {
        breedsOfCats.unshift(
            {
                breed: 'Japanese Bobtail',
                country: 'Japan',
                height: 444
            }
        );
    };
    
    let deleteBreedOfCat = (breed) => {
        let filteredArray = breedsOfCats.filter(value => value.breed == breed);
        if (filteredArray.length > 0) {
            for (let i = 0; i < filteredArray.length; i++) {
                breedsOfCats.splice(filteredArray[i], 1)
            }
        }
    };

    let showAllCats = () => {
        breedsOfCats.forEach(function (element) {
            console.log(`My favourite cats are ${element.breed} from ${element.country}`)
        })
    };


    let selectBreedOfCats = (breed) => {
        let filteredArray = breedsOfCats.filter(value => value.breed == breed);
        console.log(filteredArray)

        // как распарсить элемент???
    };

    let editCats = (breed, country) => { 
       
    }

    return { showAllCats, addBreedOfCat, addBreedOfCatMyVariant, deleteBreedOfCat, selectBreedOfCats, editCats }
}

)()



