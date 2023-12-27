/* 
-------Booleans are Data-------

getClearance = allowed => (allowed ? 'access allowed' : 'access denied')
result1 = getClearance(true)
result2 = getClearance(false)

console.log(result1) // access allowed; 
console.log(result2) // access denied; 



-------objects are data -------
getFirstName = (obj) => obj.firstName 

result = getFirstName({
    firstName: 'yazeed'
})

console.log(result)


-------Arrays are data-------

len = (array) => array.length

result = len([1, 2, 3])

console.log(result) // 3 



----------------------------
Strings, Numbers, objects, booleans, and arrays are all data


these 5 types are first class citizien in every mainstream 
language 

what makes them first class? you can pass them around. store them
in varaibles and arrays, use them as inputs for calculations 
you can use them like any piece of data 

* pass them 
*store them 
    - variables 
    - arrays
    - inputs 


    
functions can be data too 
4ways fucntions are data in javascript

1. pass them to other functions 
    a fucntion that takes or retuns another function has become higher-order 
    higher order functions lets us abstract common actions like map, filter and reduce 


2. set them as object properties 
    that makes them methods


3. store them in arrays
    useful if you're calling a list of functions in response to an event. the 
    javascript event looop works like this


4. set them as variables
    refercing a fuction make it easy to reuse, espiecally curried funcitons 
    that take some pararms now and others later!

functions as agruments 

isEven = (num) => num % 2 === 0; 
result = [1, 2, 3, 4].filter(isEven)

console.log(result)

see how filter uses isEven to decide what numbers to keep? isEven, a 
function, was a parameter to another function.

its called by filter for each number, and uses the returned value true or false
to determine if a number should be kept or discarded 


-------returning functions-------

add = (x) => (y) => x + y

add requires two parameters, but not all at once. it's a function asking 
for just x, that returns a function asking for just y.

Again, this is only possible because JS allows functions to be a return value
just like strings, numbers, booleans, etc. 

You can still supply x and y immediately, if you wish with a double invocation 

result = add(10)(20)
console.log(result) // 30


or x now and Y later 

add10 = add(10)
result = add10(20)

console.log(result) // 30

-------Greater Resuablilty-------

Probaly the greatest benefit of HOFs is greater reusability. Without them 
Js's premiere array methods - map, filter, and reduce wouldnt exist 

here a list of users. were going to do some calculations with their information


*/ 
