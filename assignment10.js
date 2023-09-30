// assignment 10 JavaScript//
 
 
 /*
 //Q1 Create a student object
var student = {
  name: "ABS Student",
  age: 20,
  student_Id: 420
};
var resuls = [];
for(var key in student){
resuls += key +': '+ student[key]+'\n';
 }
 alert(resuls)


//Q2      student object
var student = {
  student_name: "Rehan Uddin",
  student_age: 20
};

if (student.student_age > 20) {
  console.log(student.student_name + ' is not eligible for Module A classes.');
} else {
  console.log(student.student_name +' is eligible for Module A classes.');
}



//Q3  Student One's Information
var studentOne = {
  studentName: "Zia Khan",
  studentID: "J30052425300",
  subjectHTML: 80,
  studentCSS: 90,
  studentJavaScript: 90,
  studentBootstrap: 70,
  totalMarks: 400,
};

// Calculate Student One's Percentage
var percentageOne =
  ((studentOne.subjectHTML +
    studentOne.studentCSS +
    studentOne.studentJavaScript +
    studentOne.studentBootstrap) /
    studentOne.totalMarks) *
  100;

// Student Two's Information
var studentTwo = {
  studentName: "Nadeem Ahmed",
  studentID: "J30052425301",
  subjectHTML: 75,
  studentCSS: 85,
  studentJavaScript: 95,
  studentBootstrap: 80,
  totalMarks: 400,
};

// Calculate Student Two's Percentage
var percentageTwo =
  ((studentTwo.subjectHTML +
    studentTwo.studentCSS +
    studentTwo.studentJavaScript +
    studentTwo.studentBootstrap) /
    studentTwo.totalMarks) *
  100;

// Check if Student One is eligible for a scholarship
if (percentageOne > percentageTwo){
  console.log(studentOne.studentName +' is eligible for a scholarship.');
} else {
  console.log(studentTwo.studentName +' is eligible for a scholarship.');
}



//Q4
var arr = [
  { name: 'Asher', age: 22 },
  { name: 'Zubair', age: 20 },
  { name: 'Kashif', age: 23 },
  { name: 'Wasif', age: 17 },
  { name: 'Hanzala', age: 28 }
];

// Replace the 3rd index with {name: 'Siddiq', age: 23}
arr[2] = { name: 'Siddiq', age: 23 };

// Push {name: 'Umair', age: '23'} from the end
arr.push({ name: 'Umair', age: '23' });

//  Remove the first element
arr.shift();

//  Add a field createdAt: new Date() with each through loop
for (var i = 0; i < arr.length; i++) {
  arr[i].createdAt = new Date();
}

console.log(arr[0].name +' '+ arr[0].age +'\n'+ arr[1].name +' '+ arr[1].age +'\n'+ arr[2].name +' '+ arr[2].age +'\n'+ arr[3].name +' '+ arr[3].age +'\n' + arr[4].name +' '+ arr[4].age );




//Q5
var arr = [
{name: 'Asher', age:22},
{name: 'Nadeem', age:20},
{name: 'Kashif', age:23},
{name: 'Anas', age:17},
{name: 'Hummad', age:28}
];

var filter = arr.filter(function(person){ 
return person.age >= 18 && person.age <= 28 && person.name.includes('f')

}).map(function(person){ 
return person.name;
})

var resultString = filter.join(',');
console.log(resultString)




//Q6
var students = [
  
    { _id: 'std1',
        name: 'Bill Gates',
        age: 30 },
        
    { _id: 'std2',
        name: 'Steve Jobs',
        age: 30 },
        
    { _id: 'std3',
        name: 'Suzanne Collins',
        age: 30 }
];

var courses = [
    { name: 'Maths',
        std_id: ['std3', 'std1'] },
        
    { name: 'Computer Science',
        std_id: ['std3', 'std2'] },
        
    { name: 'Commerce',
        std_id: ['std1'] }
];

var result = [];
students.forEach(function(student) {
    var studentCourses = courses.filter(function(course) {
        return course.std_id.includes(student._id);
    });

    var studentInfo = {
        _id: student._id,
        name: student.name,
        courses: studentCourses.map(function(course) {
            return course.name;
        })
    };


    result.push(studentInfo);
});

console.log(result[2]);

*/


  // assignment 10 complete//