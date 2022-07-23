//Callback = a function passed as an argument to another function

sum(2,3,displayConsole);
//      >>5              //this one is displayed in the console

sum(5,10,displayDOM);
//      >>15             //display in the place of label innerHTML

function sum(x,y,callbackFunc){    // here the callbackFunc is just an example name 
                                   // you can name it whatever you like
    let total = x+y;
    callbackFunc(total);           // callbackFunc variable is now used as function here
}                            
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("callback_label").innerHTML=output;
}

//callback usage
/*
Ensures that a function is not going to rum before a task is complete
develop asynchronous code
one function has to wait for another function that helps us avoid errors and potential problems
Ex. wait for a file to load
*/ 

//example a coffee dispenser and tea dispenser

//coffee(no_cups)     as well as tea(no_cups)
dispenser(coffee,5);
//     >>5 cups of coffee has been served

dispenser(tea,10);
//     >>10 cups of coffee has been served

//console.log(typeof(coffee));     function

function dispenser(type,cups){
    // type is treated as a variable 
    // but we have defined a function with that type variable
    // type holds two names which is coffee and tea.
    if(type==coffee){               
        console.log(typeof(type));  // function
        type(cups);
    }
    else if(type==tea){
        type(cups);
    }
}

function coffee(no_cups){
    console.log(`${no_cups} cups of coffee has been served`);
}

function tea(no_cups){
    console.log(`${no_cups} cups of coffee has been served`);
}


// array.forEach() = executes a provided callback function once 
//                   for each array element



let students  = ["luffy","garp","roger","kaido","bigmom"];

students.forEach(first_cap);
students.forEach(capital_first);
console_it(students);
function first_cap(name){
    name = name.charAt(0).toUpperCase()+name.slice(1);
    console.log(name);
}
/*
      >>Luffy 
        Garp
        Roger
        Kaido
        Bigmom 
*/


// for each callback accepts three optional parameters 
// element, index, array
// element -> each element in the given array
// index   -> index of the element in an array
// array   -> array name
function capital_first(element,index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);
}

function console_it(element){
    console.log(element);
}
//     >> ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']

// lets mess the above code a little to understand it better
// what if array not given and only element and index is given

students.forEach(trial_1);

// element index and array names can be changed like x,y,z
// x -> always element
// y -> index
// z -> array
function trial_1(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
}

/*
    >>  Luffy
        0
        ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']
        Garp
        1
        ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']
        Roger
        2
        ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']
        Kaido
        3
        ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']
        Bigmom
        4
        ['Luffy', 'Garp', 'Roger', 'Kaido', 'Bigmom']
*/

// array map
// array.map -> Executes a provided callback function
//              once for each array element
//              And create a new array

let numbers = [1,2,3,4,5];
let squares = numbers.map(square);  // maps each element to the function named square
squares.forEach(print);             // using the array.forEach(function) to console the squares
/*     
    >> 1
       4
       9
       16
       25
*/  
let cubes = numbers.map(cube);      // maps each element to the function named cube
cubes.forEach(print);               // using the array.forEach(function) to console the cubes
/*
    >> 1
       8
       27
       64
       125
*/
function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

function print(element){
    console.log(element);
}

// array filter

// array.filter() = create a new array with all the elements that pass the criteria we provide

let ages = [25,18,20,9,13,22];
let adults = ages.filter(check_age); // checks and creates a new array with the elements that pass a test
adults.forEach(print);
function check_age(element){
   return element>=18;
}

arr = ['apple','mango','grape'];
arr[5]="kiwi";
console.log(arr);
//     >>['apple', 'mango', 'grape', empty × 2, 'kiwi']

// to remove the empty cells in the array we can use fiter method

let undefined_filter = arr.filter(filter_undefined);
console.log(undefined_filter);
//     >>['apple', 'mango', 'grape', 'kiwi']
undefined_filter.forEach(print); //printing each element using forEach and print function defined above
/*
    >> apple
       mango
       grape
       kiwi
*/

console.log(typeof(arr[4]));
//      >>undefined

function filter_undefined(element){
    return element!=undefined;         // checks if the element is type undefined or not 
}

//array.reduce() = reduces an array to a single value
// it accepts two parameters functions 1 is accumulator and 2 is element
let prices = [10,20,30,40,50];
let payable = prices.reduce(sum);
console.log(payable);
//     >>150

function sum(total,element){
    return total+element;   // total - accumulates the previous value
                            // and then adds it with the element
}

// would like to include detailed explanation of array methods


