// do-while loop

let user_Name;
do {
    user_Name=window.prompt("Enter your name ")
}while(user_Name=="")
console.log(user_Name,"Nice to see you!");
// username = Katakuri
//    >>Katakuri Nice to see you!


//for loop = repeat some code a certain amount of times

for (let counter =1;counter<=10;counter++){
    console.log(counter)
}

/* sequence generate using for loop
1
2
3
4
5
6
7
8
9
10
*/

// quick note:
// pre-increment and post-increment
// pre-increment <++variable>
// post-increment <variable++>

//post increment
let integer;
integer =1;
console.log(integer++);
// the pointer integer increments here but only reflects when the next call is made
//      >>1
console.log(integer)
//      >>2


//pre-increment
integer=1;
console.log(++integer);
// the pointer integer increments in the first call itself 
//      >>2
console.log(integer);
//      >>2

//countdown

for(let counter=10;counter>0;counter--){
    console.log(counter);
}
console.log("Happy New Year");
/*
01
9
8
7
6
5
4
3
2
1
Happy New Year
*/

// break and continue - behaviour

//break will break and exits the loop or current execution
//continue skips the certain part and continues the flow or execution 

// break example
for(let i=1; i<=10 ; i+=1){
    if(i==4){
        break; // the execution stops when i becomes 4 and it comes out of the loop
    }
    console.log(i);
}
/*
1
2
3     ---> the sequence breaks when i==4
*/

// continue example

for(let i=1; i<=10; i++){
    if(i==4){
        continue; // when i becomes 4 it will not terminate the code. 
                  //instead it just skips the block and continues from i=5
    }
    console.log(i);
}
/*
1
2
3   -----> 4 miss because of the if and continue functionality
5
6
7
8
9
10
*/

// nested loop - loop inside a loop
// the outer loop which is pointed as <i> starts with 0
// the outer loop which is pointed as <i> will wait for the execution of the inner loop <j> to complete
// the above mentioned looping will execute untill the outer loop becomes false <i.e> here i=3 and j=3 then the loop ends
for(let i=0; i<=3; i++){
    for(let j=0; j<=3; j++){
        console.log(i,j);
    }
}

/* 
output
00
01
02
03
10
11
12
13
20
21
22
23
30
31
32
33
*/
 

//how to put the numbers one after another on the window
//quite a simple trick if we run a for loop with the below line
//document.getElementById("shape_label").innerHTML = i;
//this one replaces the existing output in the place
//lets think how to fix this 
//simple we can use appending operator (i.e  + operator)
//document.getElementById("shape_label").innerHTML += i;
let row;
row = window.prompt("Enter the row");
for(let i=1;i<=row;i++){
    document.getElementById("shape_label").innerHTML += i;
    document.getElementById("example_label").innerHTML += "a"+i;
}
/**
 *     row = 3
 *     >>123
 *     >>a1a2a3
 */
//draw a rectangle 
let column;
let symbol = window.prompt("Enter the symbol ");
row = window.prompt("Enter the number of rows");
column = window.prompt("Enter the number of columns");

for(let i=1; i<=row; i++){
    for(let j=1;j<=column;j++){
    document.getElementById("fair_shape").innerHTML += symbol;
    }
    document.getElementById("fair_shape").innerHTML += "<br>";
}

/*  row =2   , columns=3   , symbol=!
      >> !!!
      >> !!!
*/

//Funtion

// function = define a code once, use it as many times you want 
//            to perform the operation that you scripted previously call the funtion

//  Example - Birthday song
// say you are attending two bdays in the same day 
// you are bored of typing same song twice so lets create a function to sing the birthday song
// you are writing it once and call it as many times you want and it works perfect


birthday_song();  // function call 1
birthday_song();  // function call 2
function birthday_song(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear _____");
    console.log("Happy birthday to you!");
    console.log("You are _____ years old!");
}

/*  function call 1 output
    >>   Happy birthday to you!
         Happy birthday to you!
         Happy birthday dear _____
         Happy birthday to you!
         You are _____ years old!
    function call 2 output
    >>   Happy birthday to you!
         Happy birthday to you!
         Happy birthday dear _____
         Happy birthday to you!
         You are _____ years old!
*/

// args and params in function
/**
 * parameters are some variables needed to use the full potential of the function
 * arguments are keys which we pass while calling the function
 * written while defining a function - parameters
 * passed while calling a function - arguments 
 */

user_details();   // function call
function user_details(){
    let username = "uchiha";
    let age = "21";
    birthday_greet(username,age);
}

function birthday_greet(name,age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${name}`); //you can use string formatting also 
                                                //use back tick <`${}`> and curly braces to reference a variable
    console.log("Happy birthday to you!");
    console.log("You are ", age," years old!");
}

/*  name = Luffy    age=19
    >>   Happy birthday to you!
         Happy birthday to you!
         Happy birthday dear Luffy
         Happy birthday to you!
         You are 19 years old!
*/

// return - returns a value back to the place
// where you invoke a function

let area;
let width;
let height;

width = window.prompt("Enter a width");
height = window.prompt("Enter a height");

area = getArea(width,height);

function getArea(w,h){
    let result = w*h;
    return result;  // return w*h;       this also works fine
}

// now the qn is where is the result 
// try console.log the result 

console.log(getArea.result);   //     >>undefined

// then where is the answer??
// try consoling the area

console.log("The area is ",area);  
//    width = 3    height = 2 
//    >>6      here it is the operation of return is to return the result value to the place it is called


//Ternary operator = shortcut if/else statement
//                   takes 3 operands

//                   1. a condition with ?
//                   2. expression if true :
//                   3. expression if false

// condition ? True : False;

result = 3<2?"yes it is":"No it is not";
console.log(result);
//    >> No it is not
// same way lets check the greater of two numbers
let a = window.prompt("first number");
let b = window.prompt("Second number");
result = a>b?console.log(`${a} is greater`):console.log(`${b} is greater`);
//    a=2    b=3  
//    >>3 is greater


//nested ternary operator
//check the age of a person

let age;
age = prompt("Enter your age ");
age_checker(age);
function age_checker(age){
    return age<18?console.log("You are a kid"):(age>18 && age<=36?console.log("you are a middle ager"):console.log("You are too old for this game man"));
}
//age = 15
//      >>You are a kid
//age = 32
//      >>You are a middle ager
//age = 50
//      >>You are too old for this game man 

//scope definition of a let and var

//let -> variable limited to a block scope
//var -> variable limited to a function(){}

for(var i = 0; i<3; i++){
    //console.log(i);
}
console.log(i);
//      >>3           this functionality is possible with var and the var is also accessible outside a loop
// but there is a limitation to it when var is contained inside a function it is only accessible inside a function
display()
function display(){
    for(var j = 0; j<12; j++){
        //console.log("pointer was here",j);
    }
    console.log(j);
//    >>12
}
console.log(j);
//     >>j is not defined

// whereas let is only accessible inside a block of code.
// but it is preferred to use <let>
// var can change the window property of the browser so it is little messy to use it 