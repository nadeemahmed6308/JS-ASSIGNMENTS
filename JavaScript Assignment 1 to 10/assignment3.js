// ASSIGNMENT 3 JAVASCRIPT //


/*//Q1
var username = prompt("Enter your Name")
alert('Hi, '+ username);


//Q2
var num = prompt('Enter your Number');
if (num === '') {
    num = 5
    } alert 
   (num +" x 1 = "+ num * 1 +"\n"+
    num +" x 2 = "+ num * 2 +"\n"+
    num +" x 3 = "+ num * 3 +"\n"+
    num +" x 4 = "+ num * 4 +"\n"+
    num +" x 5 = "+ num * 5 +"\n"+
    num +" x 6 = "+ num * 6 +"\n"+
    num +" x 7 = "+ num * 7 +"\n"+
    num +" x 8 = "+ num * 8 +"\n"+
    num +" x 9 = "+ num * 9 +"\n"+
    num +" x 10 = "+ num *10)
    

//Q3 
var city = prompt("Enter City Name")

if (city === "karachi") {
 alert ("'Karachi' wellcome to city of lights")
} else {
   alert ("welcome to city of " + city)
}



//Q4
var gender= prompt("Select your gender")

if (gender == "male") {
    alert("Good Morning Sir")
    
} else if (gender == "female"){
    alert("Good Morning Ma'am")
    
} else{ 
    alert("Error! please select your gender Male or Female")
}


//Q5
var signalColor = prompt("Select Signal Color")

if (signalColor == "red") {
    alert("vehicles must stop")
} else if (signalColor == "yellow"){
    alert("vehicles should get ready to move")
}else if (signalColor == "green"){
    alert("vehicles can move now")
} else{ 
    alert("Error! Please Enter Signal Color")
}



//Q6
var age = +prompt("Enter your Age");

if (age <= 12 ) {
    alert("Bacha" + " you are welcome")
} else if (age <= 50){
  alert("no jawan" + " you are welcome")
} else if(age > 50){ 
  alert("Buzrog " + " you are welcome")
} else{
  alert("Error! please enter your right age")
}
   
   

//Q7
var fuel = +prompt("Enter Fuel")

if (fuel < 0.25) {
    alert ("please Refill The Fuel in your Car")  
} else {
    alert ("good")
}


// Q8
// a = show hoga
// b = show nhi hoga
// c =
//   1) show nhi hoga
//   2) show hoga
//   3) show nhi hoga
//   4) show hoga



//Q9
var marks = +prompt("Enter your number")
var percentage = 100 / 300 * marks 
if (percentage  >= 80) {
    alert('Total Marks: '+ 300 +'\n Marks Obtained: '+ marks +'\n percentage: '+ percentage + '\n Grade: A-One')
} else if (percentage  >= 70) {
    alert('Total Marks: '+ 300 +'\n Marks Obtained: '+ marks +'\n percentage: '+ percentage + '\n Grade: A')
} else if (percentage  >= 60){
    alert('Total Marks: '+ 300 +'\n Marks Obtained: '+ marks +'\n percentage: '+ percentage + '\n Grade: B')
}else if (percentage  < 60){
  alert('Total Marks: '+ marks +"\nFail") 
} else{
  alert("Error! please Check and Retray")
}


//Q10 
var nameOfitem1 = prompt("Name of Item 1") 
var nameOfitem2 = prompt("Name of Item 2") 
var priceOfitem1 = +prompt("Price of Item 1") 
var priceOfitem2 = +prompt("Price of Item 2")
var quntityItem1 = +prompt("Quntity Item 1")
var quntityItem2 = +prompt("Quntity Item 2")
var shippingCharges = +prompt("Shipping Charges")

var item1 = priceOfitem1 * quntityItem1
var item2 = priceOfitem2 * quntityItem2
var total = item1 + item2 + shippingCharges 

if (total > 2000){ 
    alert(nameOfitem1 +" "+ item1 +"\n"+ nameOfitem2 +" "+ item2 +"\nshippingCharges "+ shippingCharges +"\nTotal Cost of Your Order is = "+ total +" PKR"+"\n10% Discounted Price is = "+ total / 10 * 9)
} else(
    alert(nameOfitem1 +" "+ item1 +"\n"+ nameOfitem2 +" "+ item2 +"\nshippingCharges "+ shippingCharges +"\nTotal = "+ total )
)


// Q11
var secretNum = 7;
var userNum = +prompt ("Guess The Secret Number")

if (secretNum == userNum){
  alert ("Bingo")
} else { 
  alert ("Close enough to the correct answer.")
}


// Q12
 var num = +prompt("Enter your Number")
if (num % 3 == 0){
     alert("number is divisible by 3.")
   } else {
     alert ("not divisible by 3.")
}


// Q13
var team1 = +prompt("Enter your score team 1")
var team2 = +prompt("Enter your score team 2")

if (team1 > team2) {
  alert("Team 1 Winner")
} else if(team1 < team2) {
  alert("Team 2 Winner")
} else {
  alert('✋✋✋ Scores is equal')
}


// Q14
var boolean = true;
alert (typeof boolean) // Boolean

var num = 12345
alert(typeof num) // Number

var username = "Nadeem Ahmed "
alert(typeof username) // String


// Q15
var usernum = +prompt("Enter your Number");

if (usernum % 2 === 0){
  alert("this is even number")
} else if (usernum % 1 === 0){ 
  alert("this is Odd number")
} else {
  alert("Error! not a number")
}




// Q16
var tampracher = +prompt("Enter Tampracher")

if (tampracher > 40){
  alert ("It is too hot outside.")
} else if (tampracher > 30){
  alert ("The Weather today is Normal.")
} else if (tampracher > 20) {
  alert("Today’s Weather is cool.")
} else if (tampracher > 10) {
  alert("OMG! Today’s weather is so Cool.")
} else { 
  alert ("inna lillah hi wa inna illahi rajeun")
}




// Q17
var firstNumber = +prompt("Enter your First Number")
var secondNumber = +prompt("Enter your second Number")
var operator = prompt("Enter Operator")

if(operator === "+"){
  alert(firstNumber + secondNumber)
}else if(operator === "-"){
  alert(firstNumber - secondNumber)
}else if(operator === "x"){
  alert(firstNumber * secondNumber)
}else if(operator === "/"){
  alert(firstNumber / secondNumber)
}else{
  alert("Error! please select operator")
}



// Q18
var day = prompt("Enter day name")

if(day == "Monday"){
  alert("It’s a week day")
}else if(day == "Tuesday"){
  alert("It’s a week day")
}else if(day == "Wednesday"){
  alert("It’s a week day")
}else if(day == "Thursday"){
  alert("It’s a week day")
}else if(day == "Friday"){
  alert("It’s a week day")
}else if(day == "Saturday"){
  alert("It's weekend")
}else if(day == "Sunday"){
  alert("Yay! It’s a holiday")
}else{
  alert('Error! please select day')
}


// Q19
var userScore = +prompt("Enter your score")

if(userScore > 50){
   alert("You are passed")
}else{
  alert("Try again!")
}


// Q20
var num1 = +prompt("Enter your number 1")
var num2 = +prompt("Enter your number 2")

if(num1 < num2){
  alert(num2 +' is greater then')
}else if(num1 > num2){ 
  alert(num1)
}else{
  alert('the are not equal numbers')
}


// Q21
var language = prompt("Type your language","english", "sindhi", "urdu")

if(language == "english"){
    alert("How are you?")
}else if(language == "sindhi"){
    alert("Chaa Hal Ahey?")
}else if(language == "urdu"){
    alert("Ap Kesy Ho?")
}else{
  alert("Error!")
}


// Q22
var num = +prompt("Enter your number")
if(num < 0){
    alert("This Nagativ Number")
}else if(num >= 0){
    alert("This Positive Number")
}else{
    alert("Error! Please Type a Number")
}


// Q23
var name1 = "cat";
var num1 = 5;
var name2 = "dog";
var num2 = 1;

var noun = prompt("Enter noun")
var num= +prompt("Enter Quntity number")

if (noun == name1 && num == num1){
  alert(name1+" "+ num1)
}else if(noun == name2 && num == num2){
  alert(name2+" "+ num2)
}else{
    alert("Error! not matche")
}

*/

// Assignment Complete //





