When making this restraunt page, i need to cover these concepts:
need to use higher function fucntions 
function getUser(user) {
    user.name;
}
1. arrays
    
2. objects
Breakfast 
    * Picture of the plate
    * Name of the plate
    * price of the plate

Lunch 
    * picture of the plate 
    * name of the plate 
    * price of the plate
    * random text about the plate

Dinner
    * picture of the plate
    * name of the plate 
    * price of the plate 
    * Summary of the plate

3.forEach()
    For each of these elements in the array we are going to place
    them in their own div 
4. DOMContentLoaded
    more research 

5. map, filter, and reduce
        use map and filter and reduce to properly implement them into their proper
        locations in the with the tag breakfast o lunch o shakes o dinner 
    
6. innerHTML
    we can append a new list  item to the existing list 
    never use innerHTML for input. 


7. includes method
    the includes method of arrray instances determines whether an array 
    includes a certain value among its entries, returning true or false
    as approtipate 



NOTES: 


 
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


Itertating Through Arrays
            we can loop through items in an array in a few ways. First there's the 
            standard for loop: 


            for (var i = 0; i < myArray.length; i++) {
                console.log(myArray[i]); // logs items in myArray
            }

            There's also the for of loop: 

            for(var item of myArray){
                console.log(item); // logs items in myArray
            }
            
            or we can utilize the forEach() method: 

            myArray.forEach(item){
                console.log(item) // logs items in myArray
            }

            Again, the similarities between iteration techniques of objects
            and arrays can make things confusing. Here's a helpful article to clear
            things up. 

Wrapping Up 
            Objects represent 'things" with charactersitics aka properties, while arrays
            create and store lists of data in a single variable. Both dot and bracket notation
            allow us to access, add, change, and remove items from an object, while zero-based
            indexing and a variety of built-in methods let us access and alter items in an array. 
            Finally, we can iterate over object properties and array items using various loops 


*/ 


/* 
    JavaScript Quickie -- Dot Notation vs. Bracket Notation
            What's the difference? when is each useful? Learn the details in 3 minutes


    Accessing Properties on an Object 
            There are two ways to access properties on an Object: 
            * Dot Notation
            * Bracket Notation
            
            Dot Notation is used most frequently. Below we'll dive into each and discover 
            some of the differences. 

        Dot Notation
            Lets first look at Dot notation. Consider this example below: 

            let obj = { 
                cat: 'meow', 
                dog: 'woof', 

            }

            let sound = obj.cat; 

            console.log(sound)


    But Braket Notation is also useful when working with objects 

    When working with bracket notation, property identifiers only have to be a String. 
    They can include any characters, including spaces. Variables may also be used as long
    as the variable resolves to a String.

    This means there are fewer limitations when working with bracket notation. We can
    now have spaces in our strings, and can even start strings with numbers. 

    Perhaps most importantly, we can now use variables to access properties in an 
    object. It's important the variable you are using reference a String. 
    
    let obj = { 
        cat: 'meow', 
        dog: 'woof', 
    }

    let dog = 'cat' 
    let sound = obj[dog];

    the above example is similar to a previous example we've already seen. 
    the main difference is we're now using bracket notation to pass in a 
    varaible. Be careful, it may look like we are looking for the dog property in our obj, 
    but thats not entire correct. dog is a variable with a value of 'cat' . Since we are using 
    brackets, the string value is passed in and we search for the 'cat' property - obj["cats"]. 
    Thus, meow is logged to the console. 


    Below, we'll try doing the same thing, but with dot notation: 
    
    let obj = { 
        cat: 'meow'; 
        dog: 'woof'; 

    }

    let dog = 'cat'; 
    let sound = obj.dog; 

    console.log(sound)


    Right off the bat you should notice that we're getting back woof. This is very different from the 
    other example and its because we can't use variables with dot notation. Attempting to lookup 
    obj.dog will actually just look for the string value of 'dog' within our object instead of using 
    variables value.  Thus, obj.dog returns woof. 


    Recap
        There are asome important differnce between dot and bracket notation: 

    Dot notation: 
        *Property identifies can only be alphanumeric (and _ and $)
        * Property identifiers cannot start with a number 
        * Property Identifiers cannot contain variables. 
        * Ok --- obj.prop_1, obj.prop$
        * Not OK --- obj.1prop, obj.prop name
    
    Braket nontation: 
        * Property identifiers have to be a String or a variable that references a String.
        * It is okay to use variables, spaces, and Strings that start with numbers. 
        * OK --- obj['1Prop"], obj["prop name"]
    

    */
