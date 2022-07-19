console.log("hello bro!!!");
console.log("nice meeting you");
// this is a comment
/*
this
is 
a 
multi 
line 
comment
*/
//-----------------------------------------------------------------------------------------
/*
VARIABLE

variable is a container for storing data
variable behaves as if it was the value it contains

Two steps 

declaration (var,let,const)
Assignment (=)

*/ 

let age;
//console.log(age);  ---> undefined
age = 21; //datatype - number
console.log(age);
//21
console.log(age++);
//21
console.log(age);
//22

//datatype - string

let firstname = "zeus";  //surrounded by quotes

//datatype - boolean
//true or false
let  student = false;

console.log(age);
console.log(firstname);
console.log(student);

age = age + 1

console.log(age); 

//concatenation -- when sting + int

age = "21"
console.log(age+1);

console.log(age-1) //behaviour of javascript

console.log("hello",firstname);
console.log("age is ",age," years old");
console.log("student: ",student);

document.getElementById("p1").innerHTML = "Hello "+ firstname;
document.getElementById("p2").innerHTML = "You are "+ age + " years old";
document.getElementById("p3").innerHTML = "student status " + student;

/**
 * arithmetic expression
 * operands
 * operator
 * y=x-2
 */

let students=35;
// students = students+1;
// students = students-2;
// students = students*2;
// students = students%2; reminder
// students = students/2; quotient

//the below code only for the previously assigned variable not for the new variable

// students += 1;
// students -= 2;
// students *= 2;
// students /= 2;
// students %= 2; shortcut methods for arithmetic operation

//operator precedence
// 1.parenthesis
// 2.exponents
// 3. multiplication
// 4. addition & subtraction

// let result = 300-(32-2)*15+20/12;
// console.log(result);

// accepting user InputDeviceInfo
// easy way with window prompt


// let username = window.prompt("hey!! hey you!!  what's your name??");
// console.log(username);






// then the html text box little difficult 

document.getElementById("button_name").onclick = function(){
    username = document.getElementById("text_name").value;
    console.log(username);
    document.getElementById("label_name").innerHTML = "Hurray!! logged in as "+username;
} 
 
//Type conversion
//change the datatype of other 

let ur_age = window.prompt("Give your age: ");
console.log(typeof ur_age);
ur_age=Number(ur_age);
console.log(typeof ur_age);
ur_age+=1;
console.log("Happy Birthday ",ur_age," changed !");

let x;
let y;
let z;

x = Number("3.14"); // x = Number("Zoom") >>NaN -> Not a number
y = String(3.14);
z = Boolean("zoom"); // if empty string is given then the output will be false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//const - a variable that can't be changed


let radius;

radius = window.prompt("Enter the radius of the circle: ");
radius = Number(radius);
const circumference = 2*3.14*radius;21
console.log("circumference of the circle ",circumference," With the radius ",radius);

//circumference = 2; gives typeerror assignment to constant

//Math function

x = 3.14;
y = -22;
z = 1;
// x = Math.round(x);
// console.log(x); 
//    >>3
// x = Math.floor(x);
// console.log(x); 
//    >>3
// x = Math.ceil(x);
// console.log(x); 
//    >>4
// x = Math.pow(x,2); this one accepts two parameters x is a value and y is a power 
// console.log(x); 
//    >>9.8596
// x = Math.sqrt(x);
// console.log(x);
//    >>1.772004514666935
// y = Math.abs(y);
// console.log(y);
//    >>22            turns negative to positive (i.e) absolutes the negative value
// max = Math.max(x,y);
// console.log(max);
//    >>3.14
// min = Math.min(x,y,z);
// console.log(min);
//    >>-22
// let pi = Math.PI;
// console.log(pi);
//    >>3.141592653589793

// Trying pythagoras theorem

let a;
let b;
let c;

a = window.prompt("Enter 'a' value: ");
a = Number(a);
b = window.prompt("Enter 'b' value: ");
b = Number(b);
c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("Side c : ",c);

document.getElementById("submit_pythagoras").onclick = function(){
    a=document.getElementById("a_side").value;
    a = Number(a);
    b=document.getElementById("b_side").value;
    b = Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("pythagoras").innerHTML="Side C: "+ c;
}


//simple counter
let counter = 0;
document.getElementById("decrease-btn").onclick = function(){
    counter -=1;
    document.getElementById("counter_label").innerHTML = counter; 
}
document.getElementById("reset-btn").onclick = function(){
    counter=0;
    document.getElementById("counter_label").innerHTML = counter; 
}
document.getElementById("increase-btn").onclick = function(){
    counter +=1;
    document.getElementById("counter_label").innerHTML = counter; 
}










//special thanks to bro code youtube
//this git author vaithiyanathan v