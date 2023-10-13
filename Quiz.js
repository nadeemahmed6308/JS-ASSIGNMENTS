// 5 Questions ka Array of object 
  var questions = [
  { title: 'What is HTML ?',
  options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
  correctAnswer: "Markup Language"
   },
 {title: 'What is CSS ?',
 options: ['Central Style Sheets', 'Cascading Style Sheets', 'Cascading Simple Sheets', 'None of the above'],
  correctAnswer: "Cascading Style Sheets"
  },
 { title: 'What is JavaScript ?',
 options: ['Programming Language', 'Hypertext Markdown Language', 'Hyperloop Machine Language', 'None of the above'],
 correctAnswer: 'Programming Language'
 },
 { title: 'Your browser Language ?',
  options: ["Java", "C++", "Python", "JavaScript"],
   correctAnswer: 'JavaScript'
 },
 { title: 'What is React?',
 options: ['Programming Language', 'Scripting Language', 'Markup Language', 'None of the above'],
  correctAnswer: 'None of the above'
   },
   { title: 'What year was JavaScript launched?',
 options: ['1996', '1995', '1994', 'None of the above'],
  correctAnswer: '1995'
   },
 ];
 
 var currentQuestionIndex = 0;
 var score = 0;
 
 function startBtn(){
  var btn = event.target 
  btn.className= 'hide';
  
  var quizContainer = document.getElementById('quiz-container')
  quizContainer.className ='';
  
  renderQuestion();
 }
 
 function renderQuestion(){
   var titleElement = document.getElementById('title')
   titleElement.innerHTML = questions[currentQuestionIndex].title
   
   var optionsElement = document.getElementById('options')
   optionsElement.innerHTML='';
   
   var options = questions[currentQuestionIndex].options
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
    
var correctValue = questions[currentQuestionIndex].correctAnswer;
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
  }
  