// concat numbers in input 

function myFunction(num) {
  var inputElement = document.getElementById('input')
  inputElement.value += num
}

function clean(){ // clean input
   var cls = document.getElementById('input').value = "";
}

function back(){ // 1 num remove 
  var remove = document.getElementById('input').value;
  document.getElementById('input').value = remove.substring(0, remove.length-1)
}

function calculat() { // calculat num
  var sum = document.getElementById('input').value;
  if (sum) {
    document.getElementById('input').value = eval(sum) 
  }
  /*else {
    document.getElementById('input').value = "NaN"
  }*/
}