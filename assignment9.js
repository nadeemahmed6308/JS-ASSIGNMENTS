  // assignment 9 JavaScript //

  /*
  // Q1  name function 
   function name(fname){
   console.log(fname)
  } 
  name('Nadeem Ahmed');
  


// Q2 function Date & Time
  function date(){
  var currentDate = new Date();
  document.write (currentDate + "<br>")
} date();




// Q3 function 
function name(fname, lname){
   console.log (fname + lname);
}
name('Nadeem', ' Ahmed');


 // Q4
  function sum(a, b){
    var num1 = +prompt("Enter num 1")
    var num2 = +prompt("Enter num 2")
    console.log(num1 + num2);
  }
sum();


// Q5
function calculator(num1, num2){
 var op = prompt('Enter your operator')
  switch(op){
    case '/':
      return num1 / num2;
    case 'x':
     return num1 * num2
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '%':
      return num1 % num2
    default:
      alert('Error! Enter operator')
  }
}
var x = calculator(8, 5);
console.log (x);



// Q6 square 
function square(){
 var num = +prompt('Enter your number')
 var sum = num * num;
 return sum;
} 
var squares = square();
console.log (squares);



//Q7
function factorial(){
var num = +prompt('Enter your number')
var fact = 1;

for (var i = num; i >= 1; i--){
  fact *= i;
}
    return fact;
}
var x = factorial();
console.log (x);




// Q8 counting 
  function counting(a,b){
  
    var startNum = +prompt('Enter your start number')
    var lastNum = +prompt('Enter your last number')
    
  if(startNum < lastNum){
  for(var i = startNum; i <= lastNum; i++){
    console.log(i);
  } 
} else {
 console.log('Error! Check number and retry.');
  }
}
  counting();





// Q9
function calculateHypotenuse(){

  var base = prompt('Enter base value');
  var perpendicular = prompt("Enter perpendicular value");
  
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)

  function calculateSquare(value){
    return value * value
  }
return hypotenuse;
}

var x = calculateHypotenuse();
console.log (x)



//Q10
function list(text){
  for (var i = 1; i < text.length; i++){
     console.log (text[i]);
  }
}
list('Examples');



//Q11
function largest(num1, num2, num3, num4){
var nums = [num1, num2, num3, num4];
console.log("Array items: " + nums + "\n")
var largestNumber = 0;
for (var i = 0; i < nums.length; i++) {
  if (nums[i] > largestNumber) {
    largestNumber = nums[i]
  }
}
console.log("The Largest number is : " + largestNumber);
}

largest(34, 90, 67, 99);



//Q12
// A

function calculate(){
  var height = +prompt('Enter box height');
  var width = +prompt("Enter box width");
  var area = height * width
  var peramitar = (height + width)* 2;
  console.log ('area : '+ area);
  console.log ('peramitar : '+ peramitar);
}
calculate();


// B
function calculate(height, width){
  var area = height * width
  var peramitar = (height + width)* 2;
  console.log ('area : '+ area);
  console.log ('peramitar : '+ peramitar);
}
calculate(10, 12);



//Q13
function arry(num1, num2, num3, num4){
  var nums = [num1, num2, num3, num4]
  var sorted = nums.sort();
  var sort = "";
  for(var i = 0; i< sorted.length; i++){
  sort += sorted[i] + " "
  }
  return sort;
}
var x = arry('b','a', 'd','c');
console.log (x)



//Q14
function number(num1, num2, num3, num4){
  var nums = [num1, num2, num3, num4]
  var multiply = 0;
  for(var i = 0; i < nums.length; i++) {
  multiply = +multiply + +nums[i] + " "
  }
   return multiply;
}
var x = number(1, 2, 3, 4);
console.log(x)
 



//Q15
var param = function inner(){
  return typeof inner; 
}
alert(param());


//Q16
function cubeOfNum(base, exponent) {
  var result = base ** exponent;
  alert(result)
}
cubeOfNum(2,3);



//Q17
function dice(){
var num = Math.floor(Math.random()*6)+1
return num;
}
var x = dice();
console.log(x)



//Q18
function reverse(str) {
   var r = '';
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}
console.log(reverse('32244'));


//Q19
var string = prompt('Enter your text')
function isPalindrome(str){
var left = 0
var right = str.length-1;

while(left < right){
if(str[left] !== str[right]){
return 'This is not Palindrome';
}
left++;
right--;
}
return 'This is Palindrome';
}
console.log(isPalindrome (string));



//Q20
var string = prompt("javaScript")
function upperCase(str){
var a = string.charAt(0).toUpperCase() + string.slice(1);
return a;
}
var x = upperCase();
console.log (x)




//Q21
var inputString = 'Web Development Tutorial';
function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = '';
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    const word = words[i].replace(/[^a-zA-Z0-9]/g, '');
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

var longest = findLongestWord(inputString);
console.log('The longest word is: '+ longest);


//Q22
function countcoVowels(){
var string = prompt('Enter your Text')
var reg = /[aeiou]/gi;
var count = string.match(reg);
var length = count.length;
return length;
}
var x = countcoVowels();
document.write(x)


//Q23
function sum(){
  var y;
var arry = [{name: 'Nadeem'}, true, sum, 8, 'hello', y];
var value = [];
for(var i=0; i < arry.length; i++){
        value += typeof arry[i] + ' ';
} return value;
}
var x = sum();
console.log (x)



//Q24
var string = "thequickbrownfoxjumpsoverthelazydog";
function extract(inputString) {
  var uniqueChars = {};
  var result = "";

  for (var i = 0; i < inputString.length; i++) {
  var currentChar = inputString[i];

    if (!uniqueChars[currentChar]) {
      uniqueChars[currentChar] = true;
      result += currentChar;
    }
  }
  return result;
}
var result = extract(string);
console.log(result); 




// Q25 
function arry(){
    var y = arguments.length;
   return y;
}
var x = arry('nadeem', 5)
console.log (x)




// Q26  age calculator 
var currentYear = 2023
var birthYear = 2010
alert(' Current year '+ currentYear +'\n Birth year '+ birthYear +"\n They are either " + (currentYear - birthYear) + " year old")



//Q27 The Lifetime Supply Calculator

function snacks(){
var favoriteSnack = "Pulao"
var currentAge = 20
var maximumAge = 80
var parDayPulao = 2

var totalPulao = (maximumAge - currentAge) * 365 * parDayPulao
var totalRound = Math.round(totalPulao)
console.log(" Favorite Snack : "+ favoriteSnack +"\nCurrent Age : "+ currentAge +"\nEstimated Maximum Age : "+ maximumAge +"\nAmount of snacks per day : "+ parDayPulao)

console.log("You Will need "+ totalRound +' '+ favoriteSnack +"\n to last you until the ripe old age of "+ maximumAge)
}
snacks();



//Q28
var radius = 2;

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log('The circumference is '+ circumference);
}

function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  console.log('The area is '+ area);
}

calcCircumference(radius);
calcArea(radius);




//Q29
var celsiusTemp = 25;
var fahrenheitTemp = 77;
function celsiusToFahrenheit(celsius) {
  var fahrenheit = (celsius * 9/5) + 32;
  console.log(celsius + "°C is " + fahrenheit + "°F"); }
function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5/9;
  console.log(fahrenheit + "°F is " + celsius + "°C");
}
celsiusToFahrenheit(celsiusTemp); 
// Output: "25°C is 77°F"
fahrenheitToCelsius(fahrenheitTemp);
// Output: "77°F is 25°C"


*/


// assignment 9 complete//