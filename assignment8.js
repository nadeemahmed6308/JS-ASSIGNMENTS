 // assignment 8 JavaScript//
 
/*

// Q1 positive integer 
var num = +prompt('Enter your positive integer')
if (num > -0) {
console.log(num)
} else {
  console.log("Error! Enter positive integer")
}


 // Q2 negative integer 
var num = +prompt('Enter your negative integer')
if (num < -0) {
console.log(num)
} else {
  console.log("Erro! Enter negative integer")
}


//Q3 Math
var user = +prompt('Enter your positive floating point number');
  var round = Math.round(user);
var floor = Math.floor(user);
var ceil = Math.ceil(user);

console.log ('Number: '+ user +'\nround off value of the number: '+ round +'\nfloor value of the number: '+ floor +'\nceil value of the number: '+ ceil)


 //Q4 positive floating point number
var user = +prompt('Enter your negative floating point number');
if (user < -0) {
  var round = Math.round(user);
  var floor = Math.floor(user);
  var ceil = Math.ceil(user);
  
  console.log ('Number: '+ user +'\nround off value of the number: '+ round +'\nfloor value of the number: '+ floor +'\nceil value of the number: '+ ceil)
} else {
  console.log('Error! positive floating point number')}


// Q5    absolute value //
var usernum = prompt('Enter your number')
for(var i = 0; i <= usernum.length; i++){
  if(usernum[i] === '-'){
  var x = usernum.slice(1);
  document.write('The absolute value of '+ usernum +' is '+ x)
  break;
  } else {
  document.write(usernum)
  break;
  }
}




// Q6  dice 
 var dice= Math.floor(Math.random() * 3)+ 4
 document.write(dice) // 4 to 6  dice



// Q7 toss
var toss= Math.floor(Math.random()*2)+1
  switch(toss){
    case 1:
    document.write("1 <br> random coin value: Tails")
    break;
    case 2:
    document.write("2 <br> random coin value: Heads")
    break;
  }


// Q8 1 and 100 ke darmiyan random number 2 se 99 includes hen
 var num = Math.floor(Math.random()* 98)+ 2
 document.write('random number between 1 and 100: '+ num) 



//Q9  kilograms
var userInput = prompt("Please enter your weight:");
var numericWeight = parseFloat(userInput.replace(/[^\d.]/g, ''));
if (!isNaN(numericWeight)) {
    document.write("Your weight is: " + numericWeight + " kilograms");
} else {
    document.write("Invalid input. Please enter a valid weight.");
}



//Q10  user input equals the secret number, 1 to 10

var userInput = +prompt('Enter equals the secret number,')
var secretNum = Math.round(Math.random()* 9)+ 1;
var x = userInput === secretNum ? 'mach' : 'not mach';
console.log('secretNum: '+ secretNum +'\nuserInputus: '+ userInput +'\nresult: '+ x )




// Q11 Current Date
document.write(new Date());



// Q12 current month
var date = new Date();
var monthName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
var month = date.getMonth();
var x = monthName[month];
document.write('Current Month is: '+ x);


// Q13 current Day
var date = new Date();
var dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
var day = date.getDay();
var x = dayName[day];
document.write('Today is: '+ x);



// Q14 current Day
var date = new Date();
var dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
var day = date.getDay();
var x = dayName[day];
switch(x){
  case 'SAT':
    document.write("It's Fun Day");
    break;
    case 'SUN':
    document.write("It's Fun Day");
    break;
    default:
  document.write('Current Day is: '+ x);
}



// Q15 -------- /
var currentDate = new Date();
var date = currentDate.getDate();
if(date <= 15){
console.log ('First fifteen days of the month')
} else{
  console.log ('Last days of the month')
}


// Q16 -------- //
var currentDate = new Date();
var year = currentDate.getFullYear()*365*24*60;
var hours = currentDate.getHours()*60
var min = currentDate.getMinutes()
console.log (year + hours + min)





// Q17  AM & PM
var currentDate = new Date();
var house = currentDate.getHours();
if(house < 12){
  console.log ('its AM');
} else {
  console.log ('its PM');
}



// Q18 later Date
var lastDayOf2023 = new Date(2023, 11, 31);
var laterDate = lastDayOf2023;

document.write(laterDate); 
// This will display the last day of 2020 in your Document 




//Q19
var ramadanStartDate = new Date("2023-6-18");
var currentDate = new Date();
var timeDifference = currentDate - ramadanStartDate;
var daysPassed = Math.floor(timeDifference / (24 * 60 * 60 * 1000)); 
console.log("Number of days passed since 1st Ramadan (June 18, 2015): "+ daysPassed +" days");


//Q20
var oldDate = new Date(2023,8,24);
var currentDate = new Date ()- oldDate;
document.write(currentDate)


//Q21
var current = new Date();
var old = new Date();

 old.setHours(current.getHours()-1)
document.write ("Current date:<br>"+current +"<br><br>"+"1 Hours ago, it was:<br>" +old)*/



/*//Q22
var current = new Date();
var old = new Date();

 old.setFullYear(current.getFullYear()-100)
document.write ("Current date:<br>"+current +"<br><br>"+"100 years back, it was:<br>" +old)



// Q23    age calculator 
var user = +prompt('Enter your birth year ')
var currentDate = new Date();
var x = currentDate.getFullYear()-user
console.log("Your age is "+ x +"\n"+"Your birth year is "+ user)


//Q24   K-Electric bill
var userName = prompt("Enter your name")
var units = prompt("Enter number of units")
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var date = new Date();
var currentMonth = months[date.getMonth()]
var chargePerUnit = 10
var amountPayable = chargePerUnit * units;
var latePayment = 500;
var latfee = amountPayable + latePayment
console.log("k-Electric Bill"+ "\nCustomer Name: "+ userName +"\nCurrent Month: "+ currentMonth + "\nNumber of units: "+ units +"\nCharges per unit: "+ chargePerUnit +"\nNet Aecont Payable (within Due Date): "+ amountPayable +"\nLate Payment Surcharge: "+ latePayment +"\nGross Amount Payable (after Due Dates): "+ latfee);
*/



// assignment 8 complete//