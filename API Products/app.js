var products;

httHtml();
function httHtml(){
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
.then(res => {products = res
 console.log (products);
 start();
} ) }

function start(){
  var container = document.getElementById('container');
  
for(var i = 0; i < products.length; i++){
var divElement = document.createElement('div');
divElement.className='card';

var category = document.createElement('h3');
category.innerHTML= products[i].category;

var imgs =document.createElement('img');
imgs.className = 'card-img-top';
imgs.src = products[i].image;
imgs.style.width = '100%';
imgs.style.height = '60%';

var cardbody = document.createElement('div');
cardbody.className = 'card-body';

var titleElement = document.createElement('h4');
titleElement.className='card-title';
titleElement.innerHTML= products[i].title;

var desc = document.createElement('p');
desc.className='card-text';
desc.innerHTML= products[i].description;

 var price  = document.createElement('h3');
 price.innerHTML= 'Rs: '+ products[i].price;
 
 divElement.append(category)
 divElement.append(imgs)
 cardbody.append(titleElement)
 cardbody.append(desc)
 cardbody.append(price)
 divElement.append(cardbody)
 container.append(divElement);
 
}
}