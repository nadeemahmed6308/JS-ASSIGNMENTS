// assignment 4 javascript //


/*
 // Q1
 var num = +prompt("Enter your number")

 if(num % 3 == 0){
    alert("Number is divisible by 3") 
 }else if(num % 2 == 0){
  alert("Number is not divisible by 3")
 }else{
    alert("Error! please Enter number")
 }





// Q2

var num = +prompt("Enter your number")

if(num % 2 == 0){
    alert("This is even number") 
}else if(num % 1 == 0){
    alert("This is Odd number")
} else{
 alert("Error! please Enter number")
}





// Q3

var age = +prompt("Enter your age")
if(age > 18){
    alert("Old enough")   
}else if(age <= 18){
    alert("Too young")
}else{
    alert("Error! please type number")
}





// Q 4

var name = "Nadeem Ahmed";
var user = prompt("Enter name");

if (user == name) {
    alert("you welcome")
}else{
    alert("not allowd")
}





// Q 5

var num = +prompt("enter your number")

switch(num % 3){
    case 0:
        alert("Number divisible by 3")
        break;

        default:
      alert("Number NOT divisible by 3")
}




// Q 6
var whether = prompt("Enter  letter")
var x = whether.charCodeAt();
console.log (x)






//Q 7

var firstNumber = +prompt("Enter your First Number")
var secondNumber = +prompt("Enter your second Number")
var operator = prompt("Enter Operator")

switch(operator){
  case '/':
  alert(firstNumber + secondNumber);
  break;
  case '×':
  alert(firstNumber * secondNumber)
  break;
  case '+':
  alert(firstNumber + secondNumber)
  break;
  case '-':
  alert(firstNumber - secondNumber)
  break;
  case '%':
  alert(firstNumber % secondNumber) 
  break;
  default:
  alert("Error! please select operator")
}





// Q 8
var time = +prompt("Enter time");
if(time == 1900){
alert('7 PM');
}else if(time >= 0000 && time < 1200){
 alert('Good Morning!')
}else if(time >= 1200 && time < 1700){
 alert('Good Afternoon!')
}else if(time >= 1700 && time < 2100){
 alert('Good  Evening!')
}else if(time >= 2100 && time <= 2359){
 alert('Good Night!')
}else{
  alert('Error! check and retry')
}




  

// Q 9
 var calendar = +prompt("Enter year, yyyy")

    if(calendar < 2023){
        alert("It is a old year")
    }else if(calendar > 2023){
        alert("It is a leap year")
    } else if(calendar == 2023){
        alert("It is a current year")
    }else {
        alert("Error! wrong digits")
    }





// Q 10

var password = 49;
var user = +prompt("Enter 2 digits password");

if(password === ""){
    alert("please enter your password") 
}else if(password === user){
    alert("currect! the password you entered matches the original password")
}else{
    alert("Incorrect password") 
}





// Q 11

var name = "Nadeem Ahmed";
var user = prompt("Enter I'd name")
if(name === user){
    alert("Hello "+ name +"!");  
}else{
 alert("You are not "+ name +" matches")
}



// Q 12
var hour = 13;
if(hour < 18){
alert("Good day");
  }else{
    alert("Good evening");
}




// Q 13
var num1 = +prompt("Enter your number 1")
var num2 = +prompt("Enter your number 2")

if(num1 > num2){
alert(num1 +' greater than');
}else if(num1 < num2){
  alert(num2 +' greater than');
}else if(num1 == num2){
  alert('equal numbers')
}else {
  alert ('Error! not a number')
}




// Q 14

var user = +prompt("Enter your number")

if(user == 0){
  alert("This number is zero.")
}else if(user > 0){
  alert("This number is positive.")
}else if(user < 0){
  alert("This number is negative.")
}

  

  

 // Q 15

var user = +prompt("Enter currect time")
if(user <= 9 && user >= 6){
alert("Breakfast is served.")
}else if(user <= 13 && user >= 11){
 alert("Time for lunch.")
}else if(user <= 20 && user >= 17){
 alert("It's dinner time.")
}else{
 alert("Sorry, you 'll have to wait, or go get a snack.")
}





// Q 16

var name = "Nadeem";
alert(typeof name); 


var num = 12345;
alert(typeof num);


var  x = true ;
alert(typeof x);


var y;
alert(typeof y);



// Q 17

var vowel = prompt("Enter Vowel");
if(vowel == "a"){
alert("true it is a vowel,")
 }else if (vowel == "e"){
  alert("true it is a vowel,")
 }else if (vowel == "i"){
  alert("true it is a vowel,")
 }else if (vowel == "o"){
  alert("true it is a vowel,")
 }else if (vowel == "u"){
  alert("true it is a vowel,")
 }else{
  alert("false it is not vowel,")
 }




// Q 18
var num1= +prompt("Enter your number 1")
var num2= +prompt("Enter your number 2")
if(num1 === num2){
    alert("true")
}else{
  alert(num1+" is NOT equal to "+num2)
}





// Q 19
var month = +prompt("Enter your month")

switch(month){
  case 1:
    alert("january");break;
  case 2:
    alert("February"); break;
  case 3:
    alert("March"); break;
  case 4:
    alert("April"); break;
  case 5:
    alert("May"); break;
  case 6:
    alert("June"); break;
  case 7:
    alert("July"); break;
  case 8:
    alert("August"); break;
  case 9:
    alert("September"); break;
  case 10:
    alert("October"); break;
  case 11:
    alert("November"); break;
  case 12:
    alert("December"); break;
  default:
    alert("Invalid month");
}

// Q20
var age = +prompt('Enter your age');
if(age <= 18){
  alert('Too young');
} else if(age > 18 ){
  alert('Old enough');
}else{
  alert('Error! not a number')
}
*/
 // assignment 4 JavaScript complete //


/*var userTime = +prompt("Enter your time")

if (userTime < 100) {

    alert("0 : "+userTime+" am")

} else if (userTime == "100") {

    var results = userTime = "OO"

    alert("1 : "+results+" am")

} else if(userTime < "200") {

    var results = userTime - 100

    alert("1 : "+results+" am")

} else if(userTime == "200") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "300") {

    var results = userTime - 200

    alert("1 : "+results+" am")

} else if(userTime == "300") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "400") {

    var results = userTime - 300

    alert("1 : "+results+" am")

} else if(userTime == "400") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "500") {

    var results = userTime - 400

    alert("1 : "+results+" am")

} else if(userTime == "500") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "600") {

    var results = userTime - 500

    alert("1 : "+results+" am")

} else if(userTime == "600") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "700") {

    var results = userTime - 600

    alert("1 : "+results+" am")

} else if(userTime == "700") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "800") {

    var results = userTime - 700

    alert("1 : "+results+" am")

} else if(userTime == "800") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "900") {

    var results = userTime - 800

    alert("1 : "+results+" am")

} else if(userTime == "900") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1000") {

    var results = userTime - 900

    alert("1 : "+results+" am")

} else if(userTime == "1000") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1100") {

    var results = userTime - 1000

    alert("1 : "+results+" am")

} else if(userTime == "1100") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1200") {

    var results = userTime - 1100

    alert("1 : "+results+" am")

} else if(userTime == "1200") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

}

 //  1200 complete

 else if(userTime < "1300") {

    var results = userTime - 1200

    alert("1 : "+results+" am")

} else if(userTime == "1300") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1400") {

    var results = userTime - 1300

    alert("1 : "+results+" am")

} else if(userTime == "1400") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1500") {

    var results = userTime - 1400

    alert("1 : "+results+" am")

} else if(userTime == "1500") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1600") {

    var results = userTime - 1500

    alert("1 : "+results+" am")

} else if(userTime == "1600") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1700") {

    var results = userTime - 1600

    alert("1 : "+results+" am")

} else if(userTime == "1700") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1800") {

    var results = userTime - 1700

    alert("1 : "+results+" am")

} else if(userTime == "1800") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "1900") {

    var results = userTime - 1800

    alert("1 : "+results+" am")

} else if(userTime == "1900") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "2000") {

    var results = userTime - 1900

    alert("1 : "+results+" am")

} else if(userTime == "2000") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "2100") {

    var results = userTime - 2000

    alert("1 : "+results+" am")

} else if(userTime == "2100") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "2200") {

    var results = userTime - 2100

    alert("1 : "+results+" am")

} else if(userTime == "2200") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "2300") {

    var results = userTime - 2200

    alert("1 : "+results+" am")

} else if(userTime == "2300") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else if(userTime < "2400") {

    var results = userTime - 2300

    alert("1 : "+results+" am")

} else if(userTime == "2400") {

    var results = userTime - "OO"

    alert("1 : "+results+" am")

} else {

    alert("Error! Enter currect number")

} */

















