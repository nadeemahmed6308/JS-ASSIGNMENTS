// assignment 5 JavaScript //

/*
//  Q1 & Q2
  var studentName = [];
  studentName.push("Nadeem Ahmed");
  alert (studentName);


//  Q3
 var studentName = ["Hummad", "Muneb", "Nadeem", "Anas", "Huzafa"];


// Q4
 var num = ["123", "567", "489", "0987", "2457"];


// Q5
 var boolean = [false, true, false, true, false];


// Q6
 var studentName = ["Hummad", 1234, "Muneb", 5678, "Nadeem", false, "Anas", true, "Huzafa"];


// Q7
 var qualifications=["SSC", "HSC", "BCS",
   "BS", "BCOM", "MS", "M.Phil.", "PhD"]
   
  //// document.write(qualifications)
   
for( var i = 1; i < qualifications.length; i++){
 console.log(i +", "+qualifications[i])
}



// Q8
 var students = ["Anas", "Muneb", "Nadeem", "Hummad"];
 var number = [300, 330, 380, 420 ];

 var userName = prompt('Enter your name')
 var userNum = +prompt('Enter your num')

 var name = students.splice(students.indexOf(userName), 1);

var num2 =  number.splice(number.indexOf(userNum), 1);

 alert("Score of "+ name +" is "+ num2 +" . "+ " Percentage: "+ num2 * 100 / 500+"%" )


// Q9
var color = ["pink", "red", "green", "yellow", "gray"];
var userAddS = prompt("starting Enter your color")
var userAddL = prompt("Last Enter your color")
var colorName = prompt("Enter your delete color name ")
var indexNum = prompt("Enter index Number ")
 color.unshift(userAddS)
color.push(userAddL)
color.unshift("light", "white")
color.shift()
color.pop()
var num = color.indexOf(colorName)
color.splice(num, indexNum)
alert(color);


// Q10
 var scoreStudent = [320,230,480,120]
   scoreStudent.sort();
 alert('Ordered Scores of Students : '+ scoreStudent);
 
 


// Q11
 var cityName = ["Karachi", "Lahor", "Islamabad", "Quetta",  "Peshawar"];
 var selected = cityName.splice(2, 2)
 alert ("Selected cities list : "+ selected);


// Q12
 var string = ["This ", " is ", " my ", " cat"]
 var index0 = string.shift()
 var index1 = string.shift()
 var index2 = string.shift()
 var index3 = string.shift()
 alert ("String : "+ index0 + index1 + index2 + index3);

// Q13
var list = ['keyboard',  'mouse', 'printer', 'monitor'];
list.shift();
list.shift();
list.shift();
list.shift();
console.log (list)



//Q14
var list = ['keyboard',  'mouse', 'printer', 'monitor'];
list.pop();
list.pop();
list.pop();
list.pop();
console.log (list)



// Q15
var phone =
 ["Apple ", " Samsung ", " Motorola ", " Nokia ", " Sony ", " Haier"];
 for(var i = 0; i < phone.length; i++){
   document.write(phone[i] + '<br>')
 }
 
 
*/


// assignment complete //