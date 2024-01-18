const allBtn = document.getElementById('all-Btn')
const breakyBtn = document.getElementById('breakfast-btn')
const lunchBtn = document.getElementById('lunch-btn')
const dinnerBtn = document.getElementById('dinner-btn')
const shakesBtn = document.getElementById('shakes-btn')

const foodDisplay = document.getElementById('food-container')



breakfast = [
    {
        img: "img/pancakes.jpg",
        name: "Buttermilk Pancakes Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/pancakes.jpg",
        name: "Bacon & Scambled Eggs Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    
    {
        img: "img/pancakes.jpg",
        name: "Sausage Patty Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/pancakes.jpg",
        name: "Omelete Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },

    
]

lunch = [
    {
        img: "img/sandwich.jpg",
        name: "Turkey & Avocado Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/sandwich.jpg",
        name: "Tuna Melt Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/sandwich.jpg",
        name: "Carne Asada Nachos",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/sandwich.jpg",
        name: "Roadhouse Burger",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
]

shakes = [
    {
        img: "img/shakes.jpg",
        name: "Oreo shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        img: "img/shakes.jpg",
        name: "Vanilla shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        img: "img/shakes.jpg",
        name: "Chocolate shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        img: "img/shakes.jpg",
        name: "Strawberry shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
]

dinner = [
    {
        img: "img/steak.jpg",
        name: "T-bone Steak",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/steak.jpg",
        name: "Fish & Chips",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        img: "img/steak.jpg",
        name: "Fried Chicken Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {   
        img: "img/steak.jpg",
        name: "Fettucine",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
]

function displayBoxes(arr23){
arr23.forEach(item => {
    foodDisplay.insertAdjacentHTML("beforeend", `<div class="item-contents">
    <div id="item-picture">
        <img src="${item.img}" alt="picture-description">
    </div>
    <div id="item-box">
        <div id="item">
            <div class="item-content">
            <span id="item-name">${item.name}</span>
            <span id="item-price">${item.price}</span>
            </div>
            <hr class="menu-bline">
        </div>
        <div class="item-text">
        ${item.text}</div></div></div>`) 

})
}


allBtn.addEventListener('click', showAllMenu =>{
    foodDisplay.innerHTML = '';
    displayBoxes(breakfast)
    displayBoxes(shakes)
    displayBoxes(lunch)
    displayBoxes(dinner)
    
})

breakyBtn.addEventListener('click', showBreakfast => {
    foodDisplay.innerHTML = '';
    displayBoxes(breakfast)
})

lunchBtn.addEventListener('click', showLunch => {
    foodDisplay.innerHTML = '';
    displayBoxes(lunch)
})

dinnerBtn.addEventListener('click', showDinner => {
    foodDisplay.innerHTML = '';
    displayBoxes(dinner)
})

shakesBtn.addEventListener('click', showShakes => {
    foodDisplay.innerHTML = '';
    displayBoxes(shakes)
})