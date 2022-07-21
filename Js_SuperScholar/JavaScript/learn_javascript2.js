// #Day2

// Random key --> generating random values using random function
// dice dom 
let x; 
let y; 
let z; 
document.getElementById("roll").onclick = function(){
    x= Math.floor(Math.random()*20)+1;
    y= Math.floor(Math.random()*20)+1;
    z= Math.floor(Math.random()*20)+1;
    document.getElementById("x_label").innerHTML = x;
    document.getElementById("y_label").innerHTML = y;
    document.getElementById("z_label").innerHTML = z;
}


//string properties and methods

let username = "vaithi author";
let phonenumber = '111-222-333'
//length of the string contained in the variable
console.log(username.length);
//    >> 13
//character at the position 0
console.log(username.charAt(0))
//    >> v
let first_letter = username.charAt(0);
//using the reference variable for the char at position 
console.log(first_letter);
//    >>v
// >>returns empty space or nothing
console.log(username.charAt(15)); 
//    >>          ('returns nothing')
//gives the first occurence of a
console.log(username.indexOf('a'));
//    >> 1 
//gives the last occurence of a
console.log(username.lastIndexOf('a')); 
//    >> 7
//returns the string in uppercase
upper_username = username.toUpperCase();
console.log(upper_username);
//    >> VAITHI AUTHOR
//returns the string in lowercase
lower_username = username.toLowerCase();
console.log(lower_username);
//    >> vaithi author
//replaces all the - with *
ph_no = phonenumber.replaceAll('-','*');
console.log(ph_no);
//    >> 111*222*333
// replaces the first occurence of - with *
ph_no2 = phonenumber.replace('-','*');
console.log(ph_no2);
//    >> 111*222-333

let example = "    snake     man     ";
// it trims the spaces at the start and end of the string
let trim_example = example.trim();
console.log(trim_example);
//    >>snake     man<<
// it trims the spaces at the start of the string
let start_trim = example.trimStart();
console.log(start_trim);
//    >>snake     man     <<
// it trims the spaces at the end of the string    
let end_trim = example.trimEnd();
console.log(end_trim);
//    >>    snake     man<<

//SLICE method

let fullname = "Trafalgar Law";
let firstname;
let lastname;

firstname = fullname.slice(0,9); //we are hardcoding the end value of the space here
console.log(firstname);
//    >>Trafalgar
//without hardcoding the end value
let space_index = fullname.indexOf(" ");
let first_name = fullname.slice(0,space_index);
console.log(first_name);
//    >>Trafalgar
//the method can also be given as an parameter for the slice method
console.log(fullname.slice(0,fullname.indexOf(" ")));
//    >>Trafalgar
lastname = fullname.slice(10);  //second parameter value is optional if not given it takes the end index as the value 
console.log(lastname);
//    >>Law
//the lastname start index should not be hardcoded all time so use indexOf method
let last_name = fullname.slice(fullname.indexOf(" ")+1);
console.log(last_name);
//    >>Law

//Method chaining = calling one method after another in one line of code

let userName = " Luffy";

let letter = userName.charAt(0);
letter = letter.toUpperCase();
console.log(letter);
//    >>L
// method chaining
let word = userName.charAt(0).toUpperCase(); //two methods in one line || this is not limited to two method
console.log(word);
//     >>L



// DECISION MAKING
// if statement = a basic form of decision making
// if a condition is true then do a task 
// if a condition is false then do different task

let mark = 63;

if(mark < 40){ //connection 1
    console.log("You didn't make it this time!! Never lose hope, you can do it :)");
}
else{ //connection 1
    if(mark >40 && mark <= 75){ // connection 2
        console.log("You made it! Put continuous efforts to score more marks.");
    }
    else{ //connection 2
        console.log("Congrats you are eligible for scholarship");
    }
}
//     >>You made it! Put continuous efforts to score more marks.
// the above example gives you the clean example for if else block
// if(stmnt){} || 1
// else{} || 1          this else is for the above if part.
//if(stmnt){} || 2
// else{} || 2          this else part is for the if statement 2 


// if else if and else
mark = 100;
if(mark <40){
    console.log("you didn't make it this time :(");
}
else if(mark >40 && mark < 75){
    console.log("hurray!! you made it");
}
else{
    console.log("you topped the exam");
}
//     >>you topped the exam
// boolean can also be used as condition

let online=false;
if(online){
    console.log("you are online");
}
else{
    console.log("check your network connection :(");
}
//     >>check your network connection :(

document.getElementById("submit_btn").onclick = function() {
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    if(document.getElementById("CheckBox").checked){
        console.log("Thanks for subscribing");
    }
    else{
        console.log("You are NOT subscribed");
    }
    if(visaBtn.checked){
        window.alert("you are paying with Visa card");
    }
    else if(mastercardBtn.checked){
        window.alert("You are payung with master card");
    }
    else if(paypalBtn.checked){
        window.alert("you are paying with paypal");
    }
    else{
        window.alert("select the payment type!");
    }
}

//  window.alert is used to show a message


//switch statement
// Note:
// break statement is mandatory after each case 
// default should not have break statement
// case **values** are case sensitive
// comparison operation are also possible in switch case

let grade='A';

switch(grade){
    case 'A':
        //if grade is A the below message logs in console
        console.log("You did great!");
        break;
    case 'B':
        //if grade is B the below message logs in console
        console.log("You did good!");
        break;
    case 'c':
        //if grade is C the below message logs in console
        console.log("You did okay!");
        break;
    case 'D':
        //if grade is D the below message logs in console
        console.log("You managed to get pass mark");
        break;
    case 'E':
        //if grade is E the below message logs in console
        console.log("you need to take retest");
        break;
    default:
        //if grade not matches then the below message logs in console
        //if grade is given as Abc 
        //      >>Abc is not a valid grade!
        console.log(grade," is not a valid grade!");
}
//     >> You did great!

// Logical operation   - this is used to check the two or more condition can be checked in a single line
// AND = &&            - both conditions must be true
// OR = ||             - if two conditions given it must satisfy atleast on condition    
// NOT = !             - mainly used with boolean <!true> meaning false  


//And operation
let temp = 30;
if (temp >= 20 && temp<24){
    console.log("Nice weather ",temp);
}
else if(temp>=24 && temp<30){
    console.log("Little hot");
}
else{
    console.log("Too hot!!!");
}

//    >>Too hot!!!


//OR operation
temp = 32;
if(temp ==20 || temp<=35){
    //here temp is not equal to 20 but it is less than 35 
    console.log("Manageable Weather");
}
else{
    console.log("Bad weather");
}

//     >>Manageable Weather


//Not operation
offline = false;
if(!offline){
    console.log("You are offline");
}
else{
    console.log("You are online");
}

//     >>You are offline


//Important Note:
//        1. conditional operator always returns you true or false

console.log(1<2);
//      >>true
console.log(1>2);
//      >>false
console.log(!(1<2));
//      >>false     **when preceding with ! it returns the opposite return value
// (i.e) true -> false     and     false -> true
console.log(!(1>2));
//      >>true      **The original value is false because of the NOT operator it returns true as output




//WHILE LOOP
//     while executes if some condition is true
//     infinite looping is possible
let user_name = "";
let user_attempt = 0;
while(user_attempt<=2 || user_name=="" || user_name==null ){ 
    //if the condition is true then the below statements gets processed
    
    user_name = window.prompt("Enter a username");
    //after executing the statements the while loop again checks the condition 
    if (user_name == "" || user_name==null){
        user_attempt=0;
    }
    else{
        user_attempt+=1;
        console.log("welcome new user ",user_name);
    }
    // if ok or cancel is pressed then the while becomes true so it asks for user
    // if user_name given three times then the while becomes false 
    console.log(user_name)
    console.log(user_attempt<=2 || user_name=="" || user_name==null)
    
    // if it is true then the statements executes again
}

// the above code ask you the username for three times if the below condition is true
// while the user == 0,1,2 or user_name="" or user_name=null it won't accept
// if the user gave his 3 username then all good. 



