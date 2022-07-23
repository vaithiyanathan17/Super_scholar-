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

// students.forEach(first_cap);
students.forEach(capital_first);
console_it(students);
function first_cap(name){
    name = name.charAt(0).toUpperCase()+name.slice(1);
    console.log(name);
}
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

// lets mess the above code a little to understand it better
// what if array not given and only element and index is given

students.forEach(trial_1);

function trial_1(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
}


