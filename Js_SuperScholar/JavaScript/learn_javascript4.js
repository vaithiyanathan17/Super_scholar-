let print = console.log;// I am tired of typing console.log 

// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables or expression

let username = "Luffy";
let items = 3;
let total = 75;

// console.log("Hello ",username);
// console.log("Total items in cart",items);
// console.log("Amount payable $",total);

//using template literals
//print is not a keyword here it is console.log I used my print variable to store console.log 
print(`Hello ${username}`);
print(`Total items in the cart ${items}`);
print(`Amount payable $${total}`);

// lets use template literals to show a big string
// example template literal   
// shop offer buy any item for each 3$ 
// calculating the total
let offer_price = window.prompt("offer price: ");
items = window.prompt("Number of items: ");

console.log(`The total number of items in the cart is ${items}
and the offer price is ${offer_price}, 
the total amount payable is $${items*offer_price}`);

// Note: you can write in multipe lines and no need of console.log in each line
// quick tip: when the innerHTML or HTML sees the <br>, <li> it considers it as an html elements

let showcase = `<ul><li> hello all</li>
                <li> how are you doing?</li>
                <li> I am doing great</li></ul>`;

document.getElementById("showCase").innerHTML = showcase;

//toLocaleString
// this one is an builtin function offered by js 
// they need 2 parameters 
// toLocaleString(1,2)  here 1 is locale -> specify the language (undefined=default set in browser)
//                           2 is options{} -> object with formatting options

let some_num = 2022.7;
let some_num_us = some_num.toLocaleString(locales="en-US");
print(some_num_us);
//      >>2,022.7  
let some_num_india = some_num.toLocaleString(locales="hi-IN");
print(some_num_india);
//      >>2,022.7
let some_num_german = some_num.toLocaleString(locales="de-DE");
print(some_num_german);
//      >>2.022,7              //different number formatting system

// lets use options 
// currency as an option
let currency_us = some_num.toLocaleString("en-US",options={style:"currency", currency:"USD"});
print(currency_us);
//     >>$2,022.70
let currency_in = some_num.toLocaleString("hi-IN",options={style:"currency", currency:"INR"});
print(currency_in); 
//     >>₹2,022.70
let currency_german = some_num.toLocaleString("de-DE",{style:"currency",currency:"EUR"});
print(currency_german);
//     >>2.022,70 €


//percent as an option
some_num = 75;
let percentage_show = some_num.toLocaleString(undefined,{style:"percent"});
print(percentage_show);
//     >>7,500%

//unit - meter,temperature-celsius,fahrenheit
let meter_show = some_num.toLocaleString(undefined,{style:"unit",unit:'meter'});
print(meter_show);
//     >>75 m
let celsius_show = some_num.toLocaleString(undefined,{style:"unit",unit:'celsius'});
print(celsius_show);
//     >>75°C
let fahrenheit_show = some_num.toLocaleString(undefined,{style:"unit",unit:'fahrenheit'});
print(fahrenheit_show);
//     >>75°F

// Number guessing game

const answer = Math.floor(Math.random()*10 +1);
let guesses = 0;
document.getElementById("game_submit").onclick = function() {
    let guess = document.getElementById("game_input").value
    guesses+=1;
    if(guess == answer ){
        alert(`${answer} is the number. you took ${guesses} guesses`);
    }
    else if(guess < answer){
        alert(`Too small`);
    }
    else{
        alert(`Too big`);
    }
}

//temperature conversion using HTML elements

function toCelsius(temperature){
    return (temperature - 32)*(5/9);
}
function toFahrenheit(temperature){
    return temperature * 9 / 5 + 32;
}


document.getElementById("temp_submit").onclick = function(){
    let temperature = document.getElementById('temp_input').value;
    temperature = Number(temperature);
    let result;
    if(document.getElementById("celsius_btn").checked){
        result = toCelsius(temperature);
        result = result.toLocaleString(undefined,{style:'unit',unit:'celsius'});
        alert(result);
    }
    else if(document.getElementById('fah_btn').checked){
        result = toFahrenheit(temperature);
        result = result.toLocaleString(undefined,{style:'unit',unit:'fahrenheit'});
        alert(result);
    }
    else{
        alert("enter a valid input");
    }
}



// Array = it is a variable that can store multiple values
// arrays are surrounded by a square brackets

let Fruits = ["Apple","Banana","Orange"];

console.log(Fruits);
//     >>['Apple', 'Banana', 'Orange']
// accessing elements of an array
// accessed using [0 to length_of_an_array]
console.log(Fruits[0]);
console.log(Fruits[1],Fruits[2]);

//     >>Apple
//     >>Banana Orange

console.log(Fruits[5]);
//     >>undefined         if the array index exceeds it returns undefined

//Note: arrays are mutable
Fruits[2]="Pears";
console.log(Fruits);
// by running the above line the orange which was at the position of 2 
// will be replaced with Pears
//     >>['Apple', 'Banana', 'Pears']

//we can also add elements to the array
Fruits[3]="Orange";
print(Fruits);
//     >>['Apple', 'Banana', 'Pears', 'Orange']
Fruits[5]="Watermelons";
print(Fruits);
//     >>['Apple', 'Banana', 'Pears', 'Orange', empty, 'Watermelons']
Fruits.push("Muskmelon");        // push method -> append element to the end of an array
print(Fruits);
//array Pop method - remove last element
let pop = Fruits.pop()
print(pop);
//      >>Muskmelon
print(Fruits);
//      >>['Apple', 'Banana', 'Pears', 'Orange', empty, 'Watermelons']
let shift =Fruits.shift();           //shift method is used to remove the element from the beginning of an array
print(shift);            
//      >>Apple
print(Fruits);
//      >>['Banana', 'Pears', 'Orange', empty, 'Watermelons']
Fruits.unshift("Muskmelon");         //unshift is used to add the element to the beginning of an array 
print(Fruits);
//      >>['Muskmelon', 'Banana', 'Pears', 'Orange', empty, 'Watermelons']

// length of an array
let length = Fruits.length;
print(length);
//      >>6
let index = Fruits.indexOf("Banana");
print(index);
//      >>1
let index1 = Fruits.indexOf("Apple");
print(index1);
//      >>-1             this means not found

print(Fruits[4]);
//      >>undefined      empty gives the value of undefined

// loop through the elements of an array

for(let i = 0; i<Fruits.length;i++){
    if(Fruits[i]==undefined){  
        print(i);
    }
}
//      >>4 



// iterate through an array
//forward iteration
for(let i=0;i<Fruits.length;i++){
    print(Fruits[i]);
}

/*
    Muskmelon
    Banana
    Pears
    Orange
    undefined
    Watermelons
*/

//reverse or backward iteration
for(let i = Fruits.length-1;i>=0;i--){
    print(Fruits[i]);
}

/*
    Watermelons
    undefined
    Orange
    Pears
    Banana
    Muskmelon
*/

//for of statement

for(let fruit of Fruits){
    console.log(fruit);
}

/*
    Muskmelon
    Banana
    Pears
    Orange
    undefined
    Watermelons
*/
//sorting an array of strings
fruits = Fruits.sort();
print(fruits);
//     >> ['Banana', 'Muskmelon', 'Orange', 'Pears', 'Watermelons', empty]
rev_fruits = Fruits.sort().reverse();        //reverse method is used to reverse a array of string
print(rev_fruits);
//     >> [empty, 'Watermelons', 'Pears', 'Orange', 'Muskmelon', 'Banana']

//2d array
let ones = [1,2,3,4,5];
let tens = [10,20,30,40,50];
let hundreds = [100,200,300,400,500];

let big_list = [ones,tens,hundreds];

for(let list of big_list){
    print(list);                    //accesing the individual whole inner list
    //[1, 2,- 3, 4, 5]          iter 1
    //[10, 20, 30, 40, 50]      iter 2
    //[100,200,300,400,500]     iter 3
    for(let numbers of list){
        print(numbers);             //accessing the inner list element
    /*
    1
    2
    3                 iter 1
    4
    5
    */
   /*
   10
   20
   30                 iter 2
   40
   50
   */
   /*
   100
   200
   300                 iter 3
   400
   500
   */
    }
}

// replacing the elements of an 2D array
// change the number 5 -> 6
big_list[0][3]=6;
print(big_list[0]);
//     >>[1, 2, 3, 6, 5]

//spread operator = allows an iterable such as an
//                  array or string to be expanded
//                  in places where zero or more
//                  arguments are expected
//                  unpacks the elements
let string = "strings";
let alphabets = ['a','b','c','d','e'];
let numbers = [1,2,3,4,5];
console.log(numbers);
//     >>[1, 2, 3, 6, 5]
console.log(...numbers);
//     >>1 2 3 4 5      shows the elements inside the array 
console.log(...alphabets);
//     >>a b c d e 
console.log(...string);
//     >>s t r i n g s     expands the elements in a string


// when and why to use ... spread operator
// 1.
let maximum = Math.max(numbers);
print(maximum);
//     >>NaN                here is the reason for unpacking the array passed to a method 
//                          returns a NaN coz of varying amount of arguments                        
maximum = Math.max(...numbers)
print(maximum);
//     >>5

//2.

// alphabets.push(numbers);
// print(alphabets);
//     >>['a', 'b', 'c', 'd', 'e', Array(5)]    Array(5)->array with length 5
alphabets.push(...numbers);
print(alphabets);
//     >>['a', 'b', 'c', 'd', 'e', 1, 2, 3, 4, 5]
console.log(...alphabets);
//     >>a b c d e 1 2 3 4 5       divided into individual elements

//REST parameters
// represents an indefinite number of parameters
// ...  (pack arguments into an array)

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(sum(a,b));
//     >>3
console.log(sum(a,b,c,d));
//     >>10
function sum(...numbers){     //packing is done here 
    total = 0;
    for(let num of numbers){  // for is used for unpacking here
        total+=num;
    }
    return total;
}



