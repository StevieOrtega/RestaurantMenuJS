
const foodDisplay = document.getElementById('food-container')


breakfast = [
    {
        name: "Buttermilk Pancakes Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Bacon & Scambled Eggs Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    
    {
        name: "Sausage Patty Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Omelete Platter",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },

    
]

lunch = [
    {
        name: "Turkey & Avocado Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Tuna Melt Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Carne Asada Nachos",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Roadhouse Burger",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
]

shakes = [
    {
        name: "Oreo shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        name: "Vanilla shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        name: "Chocolate shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
    {
        name: "Strawberry shake",
        price: 7.99,
        text: "Blended Oreo cookies with a vanilla based milkshake"
    },
]

dinner = [
    {
        name: "T-bone Steak",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Fish & Chips",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {
        name: "Fried Chicken Sandwich",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
    {   
        name: "Fettucine",
        price: 10.99,
        text: "Pancakes made soft and fluffy by scratching and with love to give it that home feel taste."
    },
]

function makeMore(arr23){
arr23.forEach(item => {
    foodDisplay.insertAdjacentHTML("beforeend", `<div class="item-contents">
    <div id="item-picture">
        <img src="" alt="picture-description">
    </div>
    <div id="item-box">
        <div id="item">
            <span id="item-name">${item.name}</span>
            <span id="item-price">${item.price}</span>
        </div>
        <div id="item-text">
        ${item.text}</div></div></div>`) 

})
}
arr23(breakfast)


