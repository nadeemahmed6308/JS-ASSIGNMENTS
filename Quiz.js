/*
// 5 Questions ka Array of object 
  var questions = [
  { question: 'What is HTML ?',
  incorrect_answers: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
  correctAnswer: "Markup Language"
   },
 {question: 'What is CSS ?',
 incorrect_answers: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'None of the above'],
  correctAnswer: "Cascading Style Sheets"
  },
 { question: 'What is JavaScript ?',
 incorrect_answers: ['Programming Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'None of the above'],
 correctAnswer: 'Programming Language'
 },
 { question: 'Your browser Language ?',
  incorrect_answers: ["Java", "C++", "Python", "JavaScript"],
   correctAnswer: 'JavaScript'
 },
 { question: 'What is React?',
 incorrect_answers: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
  correctAnswer: 'None of the above'
   },
   { question: 'What year was JavaScript launched?',
 incorrect_answers: ['1996', '1995', '1994', 'None of the above'],
  correctAnswer: '1995'
   },
 ];*/
 
 var questions;
getApi();
function getApi(){
  fetch('https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple')
  .then(res => res.json())
.then(res => {questions = res.results
  console.log (questions)
})
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

 
 
 var timeLeft = 30;
  var setId;
  
  function startTimer(){
    timeLeft = 30;
    setId = setInterval(function(){
      var timer = document.getElementById('timer');
      timer.innerText = timeLeft;
      --timeLeft;
      if (timeLeft === 0) {
       clearInterval(setId);
  
  var quizContainer = document.getElementById('quiz-container');
       quizContainer.className = 'hide';
      
        var resultContainer = document.getElementById('result')
        resultContainer.className = '';
      
var rst = document.getElementById('rst')
        rst.className = '';
      
 var percentage = score / questions.length * 100;
      
var resultText = document.getElementById('result-Text')
  resultText.innerHTML = percentage + '% score '
      }
    }, 1000)
  }
 
 var currentQuestionIndex = 0;
 var score = 0;
 
 function startBtn(){
  var btn = event.target 
  btn.className= 'hide';
  
  var quizContainer = document.getElementById('quiz-container')
  quizContainer.className ='';
  startTimer();
  renderQuestion();
 }
 
 function renderQuestion(){
   var titleElement = document.getElementById('title');
   titleElement.innerHTML = questions[currentQuestionIndex].question;
   
   var optionsElement = document.getElementById('options')
   optionsElement.innerHTML='';
   
   var options = questions[currentQuestionIndex].incorrect_answers;
   
   var correctAns = questions[currentQuestionIndex].correct_answer;
   
   
   // Remove the correct_answer from each question
questions.forEach(question => {
    var index = question.incorrect_answers.indexOf(question.correct_answer);
    if (index !== -1) {
        question.incorrect_answers.splice(index, 1);
    }
});

options.push(correctAns);
options = shuffleArray(options);

   for(var i = 0; i < options.length; i++ ){
   var inputElement = document.createElement('input');
   inputElement.type ='radio'
   inputElement.name='q1';
   inputElement.value = options[i];
   
   optionsElement.append(inputElement);
   optionsElement.append(options[i])
   
   var br = document.createElement('br')
   optionsElement.append(br)
 }
 }
 
 function next(){
   var inputElement = document.getElementsByTagName('input')
   for(var i = 0; i < inputElement.length; i++){
   if(inputElement[i].checked){
   checkScore();
   
   currentQuestionIndex++
   if(currentQuestionIndex < questions.length){
     renderQuestion();
   } else{
    var quizContainer = document.getElementById('quiz-container');
     quizContainer.className = 'hide';
     
     // timer ko stop karden;
     clearInterval(setId);
     
     var resultContainer = document.getElementById('result')
     resultContainer.className = '';
     
     var rst = document.getElementById('rst')
     rst.className ='';
     
     var percentage = score / questions.length * 100;
     
     var resultText = document.getElementById('result-Text')
     resultText.innerHTML = percentage +'% score '
   }
   }
 }}
  
  
  function checkScore(){
  var inputElement = document.getElementsByTagName('input');
  for(var i = 0; i < inputElement.length; i++){
    if(inputElement[i].checked){
    var value = inputElement[i].value;
    
var correctValue = questions[currentQuestionIndex].correct_answer;
    if(value === correctValue){
      score++
     }
    }
   }
  }

  
  function restart(){
    
    var rstr = document.getElementById('rst');
    rstr.className = 'hide';
    
    var resultContainer = document.getElementById('result')
    resultContainer.className = 'hide';
    
   var quizContainer = document.getElementById('quiz-container');
     quizContainer.className = '';
    
     currentQuestionIndex = 0;
     score = 0;
    
     renderQuestion();
     timeLeft = 30;
     startTimer();
  }
  
