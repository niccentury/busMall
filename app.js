'use strict';

function Products(filename) {
  this.filename = filename;
  this.votes = 0;
  this.clicks = 0;
  this.timesDisplayed = 0;
  Products.allproducts.push(this);
}
Products.allproducts = [];

var totalclicks = 0;

var pastDisplayed = [];




var products1 = new Products('img/bag.jpg');
var products2 = new Products('img/banana.jpg');
var products3 = new Products('img/bathroom.jpg');
new Products('img/boots.jpg');
new Products('img/breakfast.jpg');
new Products('img/bubblegum.jpg');
new Products('img/chair.jpg');
new Products('img/cthulhu.jpg');
new Products('img/dog-duck.jpg');
new Products('img/dragon.jpg');
new Products('img/pen.jpg');
new Products('img/pet-sweep.jpg');
new Products('img/scissors.jpg');
new Products('img/shark.jpg');
new Products('img/sweep.png');
new Products('img/tauntaun.jpg');
new Products('img/unicorn.jpg');
new Products('img/usb.gif');
new Products('img/water-can.jpg');
new Products('img/wine-glass.jpg');

console.log(Products.allproducts);

function displayed(){
  products1.timesDisplayed++;
  products2.timesDisplayed++;
  products3.timesDisplayed++;
}

function displayThreeNewproducts() {
  // show new pictures to user
  // grab 2 productss at random
  do {
    var firstProductIndex = Math.floor(Math.random() * Products.allproducts.length);}
  while (firstProductIndex === secondProductsIndex || firstProductIndex === thirdProductsIndex || pastDisplayed.includes(firstProductIndex));

  do {var secondProductsIndex = Math.floor(Math.random() * Products.allproducts.length);}
  while (secondProductsIndex === firstProductIndex || secondProductsIndex === thirdProductsIndex || pastDisplayed.includes(secondProductsIndex));

  do {var thirdProductsIndex = Math.floor(Math.random() * Products.allproducts.length);}
  while (thirdProductsIndex === firstProductIndex || thirdProductsIndex === secondProductsIndex || pastDisplayed.includes(thirdProductsIndex));

  pastDisplayed[0] = firstProductIndex;
  pastDisplayed[1] = secondProductsIndex;
  pastDisplayed[2] = thirdProductsIndex;

  displayed();

  console.log(displayThreeNewproducts);


  products1 = Products.allproducts[firstProductIndex];
  products2 = Products.allproducts[secondProductsIndex];
  products3 = Products.allproducts[thirdProductsIndex];

  // change img src on the page to match the 3 new productss
  img1.src = products1.filename;
  img2.src = products2.filename;
  img3.src = products3.filename;
}

function stopEvent(){
  document.getElementById('stop').setAttribute('style', 'display:none');
}
// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that Products
  totalclicks++;
  if (totalclicks < 25){
    products1.votes++;
    displayThreeNewproducts();
  }
  else{stopEvent();}
  // products1.votes = products1.votes + 1;

});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  totalclicks++;
  if (totalclicks < 25){
    products2.votes++;

    displayThreeNewproducts();
  }
  else{stopEvent();}
  // products1.votes = products1.votes + 1;

});

img3.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  totalclicks++;
  if (totalclicks < 25){
    products3.votes++;
    displayThreeNewproducts();
  }
  else{stopEvent();}
  // products1.votes = products1.votes + 1;
});






