 
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



/* 
Objects and arrays 

Both objects and arrays are considered special in JS. Objects represent 
a special data ty pe that is mutable and can be used to store a collection 
of data. Arrays are a special type of variable that is also mutableand can also
be used to store a list of values. so what exactly is the difference between
objects and arrays, when do you use which, and how to dowork with each of them



Objects 
 when to use objects 
 Objects are used to represent a "thing" in your code. that could be a person, a car, a building 
 a book. a character in a game. Bascially anything that is made up or can be defined by a set of characteristics 
 in Ojbects, these characteristics are called properties that consit of a key and a value. 
 
made up or can be defined by a set of characteristics 


// Basic Object Syntax 
    var object = { 
        key: value
    }

//Example 'person' object
    var person = {
        name: zac; 
        age: 33; 
        likescoding: true; 
    }


    Access, Add, and Remove Items from Objexts
    Properites in objects can be accessed, added, changed and removed by using either dot or 
    bracket notation. To get the value of the age key in our person object with both dot and 
    bracket notation, we'd write: 

    //Dot Notation
    person.age // returns 33

    // Bracket Notation
    person['age'] // returns 33  


    Say we wanted to change the value of Likescoding to false. We can do that with dot notation like this: 
    person.likesCoding = false;

    And if we wanted to ADD a new property to our person object, we could accomplish that with 
    dot notation as well: 

    person.hobbies = ['hiking', 'travel', 'reading'];

    Finally, to remove a property from an object, we use the delete keyword like so: 

    delete person.age; 

    access add and remove

    Iterating Through Objects 
        The most common way to loop through properties in an object is with a forInloop: 
    
    for (var key in myObject){
        console.log(key); // logs keys in myObject 
        console.log(myObject[key]); // logs values in myObjects
    }

    Another way to iterate through object properties is by appending the forEach() method
    to Objects.keys(); 

    Object.keys(myObject).forEach(function(key)){
        console.log(key); // logs keys in myObject 
        console.log(myObjec[key]) // logs values in myObject
    }

    Arrays
        When to use Arrays
        We use arrays whenever we want to create and store a list of mulitple items in 
        a single variable. Arrays are especially useful when creating ordered collections
        where items in the collection can be accessed by their numercial
        postion in the list. Just as the object properties can store values of any primative 
        data type, so too can arrays consist of strings, number, booleans, objects, or even other 
        arrays. 



        Access, Add, and Remove items from Arrays
            Arrays use zero-based indexing, so the first item in an array has an index of 0, 
            the second item an index of 1, and so on. For Instance, let's say we wanted to access the third item
            ('Mexico City) in the following array: 

            var vactionSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'
            ]

            To do so, we'd write: 

            vacationSpots[2]; // returns "Mexico City"

            Items can be added and removed from the beginning or end of an array using 
            the push(), pop(), unshift(), and shift() methods: 

            // push() - Adds Items(s) to the end of an array
            vactionSpots.push('Miami'); 

            // Pop() - Removes the last item from an array
            vacationSpots.pop(); 

            // unshift() - Adds item(s) to the beginning of an array
            vactionSpots.unshift('cape town', 'moscow');

            // shift() - Removes the first item from an array 
            vactionSpots.shift(); 
            
*/ 


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


