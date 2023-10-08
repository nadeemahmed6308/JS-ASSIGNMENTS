// global variable edit wali li ka text stor karne keliye take new text se exchange kar saken
var currentEditElemant  = '';

function addItem(){
// input ki value ko list me add karna hai
//1, input chaye
//2, list yani ul ya ol chaye
//3, list Item keliye her bar new li or uske buttons chayen

// input Id
var inputElement = document.getElementById('input');
// list yani ul id
var utElement = document.getElementById('list');
// list Item yani new li
var liElement = document.createElement('li');
liElement.className='li';
// li me edite button 
var editBtn = '<button class="editBtn"  onclick="editItem(event)">Edit</button>';
// li me delete button 
var deleteBtn = '<button class="deleteBtn" onclick="deleteItem(event)">Delete</button>';
// li ke ander input ka text or edit button or delete button ko concat karaya
 liElement.innerHTML = '<span>'+ inputElement.value +'</span>'+ editBtn + deleteBtn;
// ul men li ko append (attache) kiya 
utElement.append(liElement);
// ye 1 function he isse input ko khali kiya
cls();
};

function deleteItem(event){
  // event se us li par gay jahn se isy fire kiya he yani click kiya he
  // phir iske abba par gay yani is li ke text par
  var liElement = event.target.parentElement;
 // li ke text ko remove kiya
  liElement.remove();
}

function editItem(event){
  //1, li ki value ko input me lana hai
  //2, value change kar ke ushi li me save karna he jahan se value aae thi
  //3, edit button par click ho to add button chenge hokar update button ajae
  

  // event se us li ke text par gaye jahan se click hova tha
  var textElement = event.target.previousSibling;
    // input id
    var inputElement = document.getElementById('input');
    // jahan se click hova tha uski text input me leaye
    inputElement.value = textElement.innerHTML;
// li ka background color null kiya take jis li ke edit button par click Karen sirf uska color chenge karenge 
  if(currentEditElemant){
    currentEditElemant.style.backgroundColor = ''
  }
     //jahan se edit click hova tha uska text global variable me copy karliya take badme new text se exchange karke new text ko is jaga leange
     currentEditElemant = textElement;
     //jis li ke edit button par click karen uska background color change hojae
     textElement.style.backgroundColor= 'red';
     
  
  //update button ki id
  var update_btn = document.getElementById('update_btn');
  // update button men hide class ko hata diya 
  update_btn.className = '';
  // add button ki id
  var addItem = document.getElementById('add_btn');
  // add button me hide class laga di
  addItem.className = 'hide';
  
}

function updateBtn(){
 // update button ko hide karna he or add button ko lana he
 // input men edit wale new text ko ussi jagha chenge karna he jahan se who uth kar aya tha
 
 // jese hi update button click karen li ka color hatjae
 if (currentEditElemant) {
   currentEditElemant.style.backgroundColor= ''
 } 
 // input id
  var inputElement = document.getElementById('input');
// input ki value ko global variable se exchange kiya
  currentEditElemant.innerHTML = inputElement.value;
  // update button ki id
  var update_btn = document.getElementById('update_btn');
  // update button ko hide kiya
  update_btn.className = 'hide';
  // add button ki id
  var addItem = document.getElementById('add_btn');
  // add button ki class ko hataya
  addItem.className = '';
  // input ko function ki maddad se khali kiya
  cls();
};

function cls(){
  // 1 assa function jisse hum bar bar use kar ke input ki value ko khali kar saken
  
  // input id
  var inputElement = document.getElementById('input');
  // input ki value ko Khali kiya
  inputElement.value = "";
};

function deleteAll(){
  // 1 assa function jo 1 bar mehi sari liston ko delete karde
  
  // liston ka parent yani ul ki id
  var ulElement = document.getElementById('list');
  // ul ko delete kiya yani sari li delete 
  ulElement.innerHTML = '';
};