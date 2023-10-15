// global variable amount ko store karne keliye take new amount se calculat kar saken
var cont = 0;
// 1 assa function jo 2no buttons ki value ko alag alag type ke sath print kare 
function addTransaction(type){
  // description input ki id
  var desc = document.getElementById('description');
  // amount input ki id
  var amount = document.getElementById('Amount');
  // table ki id
  var table = document.getElementById('table');
  
//empty input par button kaam nhi karen
  if(desc.value && amount.value > 0){
  // 1 new tr bana kar rakha badme iske ander td ko append karenge
  var trElement = document.createElement('tr');
  
  // 1 new td banaya usko description ki value di
  var descTd = document.createElement('td');
  descTd.innerHTML = desc.value;
  
 // 1 new td banaya usko amount ki value di
  var amountTd = document.createElement('td');
  amountTd.innerHTML = amount.value;
  
// 1 new td banaya usko function wala type diya take jo bhi type ho har bar ye khud chenge kare 
  var typeTd = document.createElement('td');
  typeTd.innerHTML = type;
  
// oper jo tr bakaya tha is 3no td ko one by one isme append karenge
  trElement.append(descTd);
  trElement.append(amountTd);
  trElement.append(typeTd);
  
  // ab is tr ko table me append karden
  table.append(trElement);
  
//if close 
}

if (typeTd.innerHTML === 'income') {
  //jo new typeTd banai he iska text equal he income ke to new amountTd ko global variable men + karden
  cont = +cont + +amountTd.innerHTML
  
} if(typeTd.innerHTML === 'expense') {
  //jo new typeTd banai he iska text equal he income ke to new amountTd ko global variable men - karden
  cont = cont - amountTd.innerHTML
}

// Html men total show karna he uski I'd 
// ke text ko eequal karden global variable ke
var total = document.getElementById('total');
total.innerHTML = cont;

//clear input
desc.value = '';
amount.value = '';
}
