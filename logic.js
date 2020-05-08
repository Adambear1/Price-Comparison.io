//global variables
const container = document.querySelector('.container')
const form = document.querySelector('form')
const main = document.querySelector('main')
const div = document.createElement('div')
const addBtn = document.querySelector('.add-btn')
const sortBtn = document.querySelector('.sort-btn')
const closeBtn = document.querySelector('.close-btn')
const list = document.querySelector('.list')

// const GroceryStore = require('./lib')


// let cityArr = []
// function getLocation() {
//     // Coniditional statement to make sure browser supports geolocating feature
//     if (navigator.geolocation) {
//         // Provide our showPosition() function to getCurrentPosition
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         alert("Geolocation is not supported by this browser.");
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

const storeArr = ['Safeway', 'Albertsons', 'Kroger', 'Fred Meyer', 'Trader Joes', 'Wholefoods', 'Walmart']
const itemArr = [
    {
        name: 'Milk',
        price: ((Math.random() * 3) + 2).toFixed(2)
    },
    {
        name: 'Bread',
        price: ((Math.random() * 2) + 2).toFixed(2)
    },
    {
        name: 'Honey',
        price: ((Math.random() * 3) + 1).toFixed(2),
    },
    {
        name: 'Apples',
        price: ((Math.random() * 1) + 1).toFixed(2)
    },
    {
        name: 'Hamburger Meat',
        price: ((Math.random() * 3) + 2).toFixed(2)
    }, {
        name: 'Eggs',
        price: ((Math.random() * 2) + 1).toFixed(2)
    }
]



let data = []

//Fetch random user and add money
async function getRandomStore() {

    shuffle(storeArr)
    const newStore = {
        store: `${storeArr.pop()}`,
        distance: (Math.random() * 5).toFixed(2),
    };
    console.log(newStore)
    addData(newStore)
    return itemArr
}


function sortDistance() {
    data.sort((a, b) => a.distance - b.distance);
    updateDOM()
}

function showClose() {
    data = data.filter(data => data.distance < 1)
    updateDOM()
}

function addData(obj) {
    data.push(obj);
    updateDOM()
}

function formatMoney(number) {
    return (number).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}


//Use = in parameter to show that if initial parameter is not present, then default to second parameter
function updateDOM(providedData = data) {
    //Clear main div
    main.innerHTML = "<h2><strong>Store</strong>Distance</h2>";
    providedData.forEach(store => {
        const element = document.createElement('div');
        element.classList.add('store');
        element.innerHTML = `<strong>${store.store}</strong>${store.distance}`
        // element.innerHTML += `<li>${store.item}<br>${store.price}</li>`
        main.appendChild(element)
    })
}

addBtn.addEventListener('click', getRandomStore)
sortBtn.addEventListener('click', sortDistance)
closeBtn.addEventListener('click', showClose)


$(document).on('input', () => {
    let searchValue = ($('.input-field').val()).trim().toLowerCase()
    let priceResult = itemArr.map(a => a.price)
    let itemResult = itemArr.map(a => (a.name).toLowerCase())


    let itemSearch = itemResult.includes(searchValue)
    // console.log(itemResult)
    // console.log(priceResult)
    // console.log(itemResult)
    if (itemSearch) {
        let itemIndex = itemResult.indexOf(searchValue)
        console.log(itemIndex)
        let itemPrice = formatMoney(priceResult[itemIndex])
        console.log(itemPrice)
        var listEl = document.createElement('ul')
        listEl.classList.add('item')
        listEl.innerHTML = `<li>${searchValue}</li>`
        list.appendChild(listEl)
        $('.input-field').val('')
    }
})









