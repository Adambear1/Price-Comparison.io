//global variables
const container = document.querySelector('.container')
const form = document.querySelector('form')
const main = document.querySelector('main')
const div = document.createElement('div')
const addBtn = document.querySelector('.add-btn')
const sortBtn = document.querySelector('.sort-btn')
const closeBtn = document.querySelector('.close-btn')
const list = document.querySelector('.list')
const note = document.querySelector('.note')
const total = document.querySelector('.total')
const priceBtn = document.querySelector('.price-btn')
// const GroceryStore = require('./lib')
// let cityArr = []
// function getLocation() {
//     // Coniditional statement to make sure browser supports geolocating feature
//     if (navigator.geolocation) {
//         // Provide our showPosition() function to getCurrentPosition
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         alert('Geolocation is not supported by this browser.');
//     }
// }
// // Called after the getLocation function and takes an argument of position.
// function showPosition(position) {
//     // Grab coordinates from the given object & rounds off to nearest 10th.
//     var lat = Math.round(position.coords.latitude * 10) / 10;
//     var lon = Math.round(position.coords.longitude * 10) / 10;
//     // Call our next function, passing on the coordinates
//     weatherDisplay(lat, lon);
// }
// //Calls function of getLocation, where showPosition is nested/called in
// getLocation();
// function weatherDisplay(lat, lon) {
//     $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79bb7dc0e8f07f6ebe01166410e6e392`,
//         function (data) {
//             console.log(data)
//             return cityArr.push(data.coord.lon, data.coord.lat, data.name)
//         });
// }
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
const storeArr = ['Safeway', 'Albertsons', 'Kroger', 'FredMeyer', 'TraderJoes', 'Wholefoods', 'Walmart']
const itemArr = [
    {
        name: 'Milk',
        price: 2.00
    },
    {
        name: 'Bread',
        price: 2.50
    },
    {
        name: 'Honey',
        price: 1.00
    },
    {
        name: 'Butter',
        price: 1.50
    },
    {
        name: 'Apples',
        price: 1.75
    },
    {
        name: 'Cheese',
        price: 2.75
    },
    {
        name: 'Meat',
        price: 4.00
    },
    {
        name: 'Fish',
        price: 5.00
    },
    {
        name: 'Soda',
        price: 1.25
    },
    {
        name: 'Flour',
        price: 2.95
    },
    {
        name: 'Almonds',
        price: .50
    }, {
        name: 'Eggs',
        price: 1.50
    }
]
let data = []
getRandomStore()
getRandomStore()
getRandomStore()
//Fetch random user and add money
async function getRandomStore(input = 1) {
    shuffle(storeArr)
    const newStore = {
        store: `${storeArr.pop()}`,
        distance: (Math.random() * 3).toFixed(2),
    };
    console.log(newStore)
    addData(newStore)
    sortDistance()
    return itemArr
}
function sortDistance() {
    data.sort((a, b) => a.distance - b.distance);
    updateDOM()
}

function addData(obj) {
    data.push(obj);
    updateDOM()
}
// function showTotal() {

// }
// function formatMoney(number) {
//     return (number).replace(/\d(?=(\d{3})+\.)/g, '$&,')
// }
//Use = in parameter to show that if initial parameter is not present, then default to second parameter
function updateDOM(providedData = data) {
    //Clear main div
    main.innerHTML = '<h2><strong>Store</strong>Distance</h2>';
    providedData.forEach(store => {
        const element = document.createElement('div');
        // element.classList.add('store');
        element.innerHTML = `<strong id="${store.store}">${store.store}</strong>${store.distance} miles<ul class='store'>`
        element.innerHTML += `<strong id='${store.store}Total' class='total'>Total:</strong><br><br><br><br>`
        // element.innerHTML += `<li>${store.item}<br>${store.price}</li>`
        main.appendChild(element)
        // element.append(`Total:`)
    })
}





function sortPrice() {
    console.log(cumulative.sort((a, b) => a.distance - b.distance))
    updateDOM()
}





let arr1 = []
let store1 = []
let store2 = []
let store3 = []
let cumulative = []
const addition = (acc, curVal) => acc + curVal


$(document).on('ready', () => {
    $('.input-field').on('input', () => {
        // console.log($('.listItem').html() === $('.input-field').val())
        // console.log(document.querySelectorAll('.listItem')[0])
        let searchValue = ($('.input-field').val()).trim().toLowerCase()
        let priceResult = itemArr.map(a => a.price)
        let itemResult = itemArr.map(a => (a.name).toLowerCase())
        let itemSearch = itemResult.includes(searchValue)
        var stores = $('.store')
        if (itemSearch) {
            let itemIndex = itemResult.indexOf(searchValue)
            let itemPrice = priceResult[itemIndex]
            var listEl = document.createElement('li')
            listEl.innerHTML = `<p class='listItem'>${searchValue}</p>`
            list.append(listEl)
            list.searchValue
            $('.store').each((i) => {
                var listEl = document.createElement('li')
                var ip = ((Math.random() * 1) + itemPrice).toFixed(2)
                listEl.classList.add('storeItem')
                listEl.innerHTML = `<p class='grocery-items' id=${stores}>${searchValue} $${(ip)}</p>`
                stores[i].appendChild(listEl);
                arr1.push(+ip)
            })

            //Math

            for (var i = 0; i <= stores.length; i += 3) {
                var return1 = arr1.splice(i, 1);
                store1.push(+return1)
                // console.log(store1)
            }
            for (var i = 0; i <= stores.length; i++) {
                var return2 = arr1.splice(i, 1);
                store2.push(+return2)
                // console.log(store2)
            }
            for (var i = 0; i <= stores.length; i++) {
                var return3 = arr1.splice(i, 1);
                store3.push(+return3)
                // console.log(store3)
            }

            $('.input-field').val('')

            cumulative = []
            const store1Sum = store1.reduce(addition)
            cumulative.push(store1Sum)
            const store2Sum = store2.reduce(addition)
            cumulative.push(store2Sum)
            const store3Sum = store3.reduce(addition)
            cumulative.push(store3Sum)
            console.log(cumulative)
            // console.log(store1Sum)
            // console.log(store2Sum)
            // console.log(store3Sum)
            document.querySelector(`#${data[0].store}Total`).innerHTML = `Total: $${store1Sum}`
            document.querySelector(`#${data[1].store}Total`).innerHTML = `Total: $${store2Sum}`
            document.querySelector(`#${data[2].store}Total`).innerHTML = `Total: $${store3Sum}`


        }

        // console.log(arr1)







        // console.log($('.grocery-items').text())
        // console.log($('.grocery-items').text().splice((($('.grocery-items').text().length) / 3)))


        // for (let i = 0; i < $('.store').length; i++) {
        //     console.log(storeArr[i])
        //     // console.log(JSON.stringify(storeArr[i]).substring(1, storeArr[i].length + 1))
        //     let practice = JSON.stringify(storeArr[i]).substring(1, storeArr[i].length + 1)
        //     // console.log(practice)
        //     console.log($(`${practice}`).selector)
        //     console.log(storeArr[i] === $(`${practice}`).selector)
        //     // if (storeArr[i] === $(`${practice}`).selector) {
        //     console.log($(`${storeArr[i]}`).html())
        //     //         // console.log('hello')
        //     //     } else {
        //     //         // console.log('no')
        //     //     }

        // }
    })
})


$('.fa-question').on('click', () => {
    $('.note').toggle()
})

list.addEventListener('click', () => {
    note.style.display = 'none'
});


$(document).on('ready', () => {
    $('.note').hide()
})


addBtn.addEventListener('click', getRandomStore)
sortBtn.addEventListener('click', sortDistance)
priceBtn.addEventListener('click', sortPrice)
// closeBtn.addEventListener('click', showClosest)