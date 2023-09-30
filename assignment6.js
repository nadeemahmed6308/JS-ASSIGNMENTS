// assignment 6 JavaScript //

/*
// Q1
 for(var i = 0; i < 5; i++){
   console.log("Hello World \n")
 }


// Q2
 for (var i = 1; i <= 10; i++) {
   console.log(i)
 }


// Q3
  var num1 = +prompt("Enter a number to print its multiplication table")
  var num2 = +prompt("Enter length of multiplication table")
  document.write("<h3>Multiplication table of "+ num1 +" length of "+ num2 +"<br> </h3>")
 
  for(var i = 1; i <= num2; i++){
     document.write(num1 +" x "+i+" = "+i * num1 +"<br>")
  }



// Q4
var phone =
 ["Nokia", "Samsung", "Apple" , "Sony", "Huawei"];
 for(var i = 0; i < phone.length; i++){
   console.log(phone[i] + '\n')
 }
 

 

// Q5
  var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
  for(var i = 0; i < fruits.length; i++){
      console.log("Element at index "+ i +" is "+ fruits[i])
  }
   
   
   
   
   // Q6
  var usernum = +prompt("Enter items by using")
  console.log("Number of items: "+ usernum + " items: \n")
  
  for(var i = 1; i <= usernum; i++){
  var item = prompt("Enter your items")
  console.log(item)
  }
   
   
   
   
   // Q7
  // A Counting:
  for(var i = 1; i <= 15; i++){
   document.write(i + ", ")
  }
   
  // B Reverse counting:
  for (var i = 10; i >= 1; i--) {
     document.write(i + ", ")
  }

// C even number:
  for (var i = 0; i <= 20; i+=2) {
    document.write(i + ", ")
  }


// D Odd number:
 for (var i = 1; i <= 20; i+=2) {
  document.write(i + ", ")
 }

// E  Series:
 for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ")
 }


// Q8
 var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
 var user = prompt("welcome to ABC Bakery. What do you want to order sir/ma'am ?")
 var index = bakery.indexOf(user)
 var getItem = bakery.splice(index, 1)

 if(user == getItem){
  alert(user +' is available at index '+ index +' in our bakery')
 } else{
  alert ("We are sorry. "+ user +" is not available in our bakery")
 }




// Q9
 var nums = [24, 53, 78, 91, 12];
console.log("Array items: "+ nums +"\n")
  var largestNumber = 0;
  for(var i = 0; i < nums.length; i++){
  if(nums[i] > largestNumber){
   largestNumber = nums[i]
   }
} console.log("The Largest number is : "+ largestNumber);





// Q10
 var nums = [24, 53, 78, 91, 12]
console.log("Array items: "+ nums +"\n")
 var smallestNumber = nums[0]
 for(var i = 0; i < nums.length; i++){
  if(nums[i] < smallestNumber){
    smallestNumber = nums[i]
 }
 } console.log("Smallest Number is : "+ smallestNumber)



// Q11
 var nums = [24, 53, 78, 91, 12]
console.log("Array items: "+ nums +"\n")
 var smallestNumber = nums[0]
 var number = 0;
  for(var i = 0; i < nums.length; i++){
   if(nums[i] < smallestNumber){
     smallestNumber = nums[i]
    } else {
      number = nums[i]
    }
 } console.log("Smallest Number is : "+ smallestNumber +'\nThe Largest number is : '+ number)
 
 
 

 // Q12
 for(var i = 5; i <= 100; i+=5){
   document.write(i + ", ");
 }
 
 
 
 
 
 // Q13
  var students = ["Nadeem ", "Ali ", "Sami ", "Taha ", "Inam "];
  var scores = [96, 58, 73, 89, 90];
  var fullNames = [];
 for (var i = 0; i < students.length; i++) {
    fullNames.push(students[i] + scores[i])
   } console.log(fullNames)
 
 
 
   // Q14
   var scores = [12, 45, 3, 22, 34, 50]
   var num = +prompt("Enter your num")
   var index = scores.indexOf(num)+1
   var sum = scores.splice(0, index,)
   document.write(sum)
 
 
 
  // Q15
var num = [ [1,2,3], [4,5,6], [7,8,9] ]
 for (var i = 0; i < num.length; i++){
   var nested = num[i]

  var inliner = "";
   for (var j = 0; j < nested.length; j++){
   inliner += nested[j]
  }
   console.log(inliner)
  }


 
  // Q16
  var num = +prompt("Enter your number")
   for(var i = num; i >= 0; i-=0.5){
   document.write(i +" , ")
 }
 


  // Q17
  for(var i = 0; i <= 20; i++){
    if(i % 2 == 0){
      console.log(i +" is even number \n")
    }else {
      console.log(i + " is Odd number \n")
    }
  }
   
   
   
  //Q18
  var oddNum = 1;
for (var i = 1; i <= 7; i++){ 
  if(i % 2 != 0){
oddNum*=i
  }
}  console.log("The product of odd integers from 1 to 7 is " + oddNum)
   
   
   
  // Q19
var num = +prompt("Enter stars number")
   for(var i = num;  i >= 1; i--){
      for(var j = i; j >= 1; j-- ){
        document.write("* ")
      }
   document.write("<br>")
  }
   
   
   
   // Q20
         // A
 var num = +prompt("Enter stars number")
  for (var i = 1; i <= num; i++){
   for(var j = 1; j <= num; j++){
      document.write("* ")
    }
   document.write("<br>")
  }
   
   
 // B
 var num = +prompt("Enter stars number")
   for(var i = num; i >= 1; i--){
    for(var j = num; j >= i; j--){
      document.write("* ")
    }
  document.write("<br>")
  }
   
  
  // C
var num = +prompt("Enter stars number")
  for(var i = 1; i <= num; i++){
    for(var j = i; j <= num; j++){
      document.write("* ")
    }
      document.write("<br>")
   }
   */
   
   // assignment 6 complete // 
   
   
  