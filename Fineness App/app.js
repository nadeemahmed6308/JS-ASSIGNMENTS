var cont = 0;
    var currentEditElement = '';
    
    function addTransaction(type) {
      var desc = document.getElementById('description');
      var amount = document.getElementById('Amount');
      var table = document.getElementById('table');

    if(desc.value && amount.value > 0){
        var trElement = document.createElement('tr');

        var descTd = document.createElement('td');
        descTd.innerHTML = desc.value;

        var amountTd = document.createElement('td');
        amountTd.innerHTML = amount.value;

        var typeTd = document.createElement('td');
        typeTd.innerHTML = type;

        var editTd = document.createElement('td');

    var editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';

  editButton.onclick = function(event){
    var income = document.getElementById('income');
    income.className = 'hide';
    
    var update = document.getElementById('update');
    update.className = '';
   
    amount.value = amountTd.innerHTML;
    desc.value = descTd.innerHTML;

    currentEditElement = amountTd;
        
  var edit_amount = event.target.parentElement.previousSibling.previousSibling.innerHTML;
 
var y = +total.innerHTML - +edit_amount;
       total.innerHTML = y;
  };
  editTd.append(editButton);
    
  var deleteTd = document.createElement('td');
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  
deleteButton.onclick = function(event){
  var deleteTr = event.target.parentElement.parentElement;
  deleteTr.remove();

  total.innerHTML = +total.innerHTML - +event.target.parentElement.previousSibling.previousSibling.previousSibling.innerHTML;
};
deleteTd.append(deleteButton);

        trElement.append(descTd);
        trElement.append(amountTd);
        trElement.append(typeTd);
        trElement.append(editTd);
        trElement.append(deleteTd);
        table.append(trElement);
      };

      if (type === 'income'){ 
        cont = +cont + +amountTd.innerHTML;
      }
      if (type === 'expense'){ 
      cont = cont - amountTd.innerHTML;
      }

    var total = document.getElementById('total');
    total.innerHTML = cont;

      desc.value = '';
      amount.value = '';
    };

  function upload(){
  var income = document.getElementById('income');
  income.className = '';
  
  var update = document.getElementById('update');
  update.className = 'hide';
      
  var amount = document.getElementById('Amount');
      
  total.innerHTML = +total.innerHTML + +amount.value;

  currentEditElement.innerHTML = amount.value; 

  var desc = document.getElementById('description');
  var amount = document.getElementById('Amount');
  desc.value = '';
  amount.value = '';
  }
