// assignment 7 JavaScript //
/*

//Q1
  var name1 = prompt("Enter your first name")
  var name2 = prompt("Enter your last name")
  console.log("Hello "+name1+" "+name2)


//Q2
  var favoriteMobile = prompt("Enter  your favorite mobile phone model")
  var count = favoriteMobile.length;
 console.log("My favorite phone is: "+favoriteMobile+"\n Length of string: "+count)


//Q3
  var string = "Pakistani";
  var word = prompt("Enter your World")
  var output = string.indexOf(word);
  console.log ("String : "+ string +"\nIndex of "+ word +": "+ output)


//Q4
 var string = "Hello World"
 var word = prompt("Enter your World")
 var output = string.lastIndexOf(word);
  console.log ("String: "+ string +"\nLast Index of "+ word+": "+ output)


//Q5
  var string = "Pakistani"
  var word = prompt("Enter your Word")
  var output = string[word];
  console.log ("character at Index "+ word+": "+ output)




//Q6
  var name1 = prompt(" Enter your first name");
  var name2 = prompt(" Enter your last name");
  var merge = name1.concat(name2);
  console.log (merge)


//Q7
// Examples A 
var city = "Hyderabad"
for(var i = 0; i < city.length; i++){
var getWord = city.slice(i, i+5);
if(getWord === 'Hyder')
var x = city.slice(0, i)+ 'Islam'+ city.slice(i+5);
}
console.log (x)


// Examples B
 var city = "Hyderabad"
 city = city.replace("Hyder", "Islam")
 console.log(city)


//Q8
  var message = "Ali and Sami are best friends. They play cricket and football together."
  message = message.replace(/and/g, "&")
  console.log(message)


//Q9
 var str = '472';
 var num = Number(str);
 console.log (num)

 var num = 473;
 var str = num.toString();
console.log(str)



//Q10
var url = prompt("Enter your url")
var getName = url.slice(4, );
console.log("Url: "+url+"\nDomain: "+ getName);



//Q11
var user = prompt("Enter your text")
var upper = user.toUpperCase()
console.log(upper);


//Q12
//var user = prompt("Enter your text")
//var lower = user.toLowerCase()
//console.log(lower);


//Q13
var str = "javaScript";
var a = str.charAt(0).toUpperCase()+ str.slice(1);
console.log (a)



//Q14
var num = 35.36 ;
var str = num.toString()
for(var i = 0; i < str.length; i++){
 var a = str.slice(i, i+1)
 if (a === ".") {
 var z = str.slice(0, i)+ str.slice(i+1)
 console.log("Number: "+ num +"\nResult: "+ z)
 break;
 } 
 }



//Q15
var a = "3";
var b = "3";
var x = a + b
console.log("a is "+ a +"\nb is "+ b +"\na + b is "+ x);


//Q16
var a = "3";
var b = "3";
var x = a - b
console.log("a is "+ a +"\nb is "+ b +"\na - b is "+ x);


//Q17
var num1 = +prompt("Enter your number")
var a = String.fromCharCode(num1)
console.log(a)



//Q18
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var user = prompt("welcome to ABC Bakery. What do you want to order sir/ma'am ?")
 var index = bakery.indexOf(user)
var show = bakery.splice(index, 1)

if(user == show){
console.log(user+" is available at index "+ index +" in our bakery")
 } else{
   console.log("We are sorry. "+ user +" is not available in our bakery")
 }


//Q19
var user1 = prompt("Enter first text")
var user2 = prompt("Enter second text")
for(var i = 0; i < user1.length; i++){
  if(user1 > user2){
    console.log(user1+" is greater then "+user2)
  } else if(user1 < user2){
    console.log(user1+" is less then "+user2)
 } else {
    console.log(user1+" is equal "+user2)
 }
  break;
}


//Q20
function isPasswordValid(password) {
  // Check if the password is at least 6 characters long
  if (password.length < 6) {
    return false;
  }

  // Check if the password starts with a number
  if (/^\d/.test(password)) {
    return false;
  }

  // Check if the password contains at least one alphabet and one number
  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return false;
  }

  return true;
}

function getPasswordFromUser() {
  let password = prompt("Enter a password:");
  
  if (isPasswordValid(password)) {
    console.log("Password is valid!");
  } else {
    console.log("Password is not valid. Please enter a valid password.");
    getPasswordFromUser();
  }
}

getPasswordFromUser();




//Q21
var university = "University of Karachi";
for(var i = 0; i < university.length; i++){
  console.log(university[i]+"\n")
}



//Q22
var user = prompt("Enter your text")
var a = user.slice(-1);
console.log(a)



//Q23
var string = '“the quick brown fox jumps over the lazy dog”';
var arr = string.match(/the/g);
var count = arr.length;
console.log('Text: ' + string + '\nThe are ' + count + ' occurrences(s) of word "the"')


//Q24
var str = prompt('Enter your text');
var reg = /[aeiou]/gi;
var vowels = str.match(reg);
var count = vowels.length;

console.log('count number of vowels '+ count +' in '+ str)

*/

// assignment 7 JavaScript complete//