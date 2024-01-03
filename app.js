 
// -------Booleans are Data-------

// getClearance = allowed => (allowed ? 'access allowed' : 'access denied')
// result1 = getClearance(true)
// result2 = getClearance(false)

// console.log(result1) // access allowed; 
// console.log(result2) // access denied; 

// -------objects are data -------
// getFirstName = (obj) => obj.firstName 

// result = getFirstName({
//     firstName: 'yazeed'
// })

// console.log(result)

// -------Arrays are data-------

// len = (array) => array.length

// result = len([1, 2, 3])

// console.log(result) // 3 

// ----------------------------
// Strings, Numbers, objects, booleans, and arrays are all data


// these 5 types are first class citizien in every mainstream 
// language 

// what makes them first class? you can pass them around. store them
// in varaibles and arrays, use them as inputs for calculations 
// you can use them like any piece of data 

// * pass them 
// *store them 
//     - variables 
//     - arrays
//     - inputs 
  
// functions can be data too 
// 4ways fucntions are data in javascript

// 1. pass them to other functions 
//     a fucntion that takes or retuns another function has become higher-order 
//     higher order functions lets us abstract common actions like map, filter and reduce 

// 2. set them as object properties 
//     that makes them methods


// 3. store them in arrays
//     useful if you're calling a list of functions in response to an event. the 
//     javascript event looop works like this


// 4. set them as variables
//     refercing a fuction make it easy to reuse, espiecally curried funcitons 
//     that take some pararms now and others later!

// functions as agruments 

// isEven = (num) => num % 2 === 0; 
// result = [1, 2, 3, 4].filter(isEven)

// console.log(result)

// see how filter uses isEven to decide what numbers to keep? isEven, a 
// function, was a parameter to another function.

// its called by filter for each number, and uses the returned value true or false
// to determine if a number should be kept or discarded 


// -------returning functions-------

// add = (x) => (y) => x + y

// add requires two parameters, but not all at once. it's a function asking 
// for just x, that returns a function asking for just y.

// Again, this is only possible because JS allows functions to be a return value
// just like strings, numbers, booleans, etc. 

// You can still supply x and y immediately, if you wish with a double invocation 

// result = add(10)(20)
// console.log(result) // 30


// or x now and Y later 

// add10 = add(10)
// result = add10(20)

// console.log(result) // 30

// -------Greater Resuablilty-------

// Probaly the greatest benefit of HOFs is greater reusability. Without them 
// Js's premiere array methods - map, filter, and reduce wouldnt exist 

// here a list of users. were going to do some calculations with their information


// Map 
// without higher-order functions, we'd always need loops to mimic maps
// functionality

// getName = (user) => user.name
// userName = []

// for (let i = 0; i < users.length; i++){
//     const name = getName(user[i])

//     userNames.push(name)
// }

// console.log(userNames)

// we made a function and it returns the name of the user 
// userName is an empty array 

// the for loop lets us iterate through it and get every name one by one
// until we reach the end of the users length and. in getName we pass the user array
// and then we push those names into the userName array while we loop

// annd then we console.log the array


// we could do this instead of all that 


// let getName = (user) => user.name
// userNames = users.map(getName)

// console.log(userNames)
// we still make the function as we are suppose to but.... 
// now we use the map function instead so we dont have use a for loop 
// the map function will use the call the getname function and use that to get the name 
// and push the names into the userNames array. all in one. 
// then we  console.log the variable


// summary

//  * strings, numbers, bools, arrays, and objects can be stored as variables
// , arrays, and properties or methods

//     * javascript treats functions the same way
//     * this allows for functions that operate on other functions: higer-order
//     * functions
//     * Map, filter, and reduce are prime examples and make common patterns like transforming, searching, 
//     * and summing liss much easier
//     * string, numbers, bool, and array and objects can be strored as bar

// users = [
//     {
//         firstName: "Bonnie",
//         age: 23
//     },
//     {
//         firstName: "James",
//         age: 34
//     },
//     {
//         firstName: "bob",
//         age: 22
//     },
//     {
//         firstName: "Ferxxo",
//         age: 19
//     },
    
// ]

// let getName = (user) => user.firstName

// let userNames = users.filter(getName)

// console.log(userNames)



// let startsWithB = (string) => string.toLowerCase().startsWith('b')

// let bNames = users.filter((user) => startsWithB(user.firstName))

// console.log(bNames)

// let totalAge = users.reduce((total, user) => user.age + total, 0)

// console.log(totalAge)


breakfastItems = [
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

lunchItems = [
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

dinnerItems = [
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




