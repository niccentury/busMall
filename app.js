'use strict';

function Products(filename) {
  this.filename = filename;
  this.votes = 0;
  this.click = 0;
  this.timesDisplayed = 0;
  Products.allproducts.push(this);
}
Products.allproducts = [];

//??????
new Products('img/bag.jpg');
new Products('img/banana.jpg');
new Products('img/bathroom.jpg');
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

//This is how to call three products, good
var products1 = new Products('img/boots.jpg');
var products2 = new Products('img/breakfast.jpg');
var products3 = new Products('img/bubblegum.jpg');

function displayThreeNewproducts() {
  // show new pictures to user
  // grab 2 productss at random
  do {
    var firstProductIndex = Math.floor(Math.random() * Products.allproducts.length);
    var secondProductsIndex = Math.floor(Math.random() * Products.allproducts.length);
    var thirdProductsIndex = Math.floor(Math.random() * Products.allproducts.length);
  } while (firstProductIndex === thirdProductsIndex);(firstProductIndex === secondProductsIndex);(secondProductsIndex === thirdProductsIndex);
  //   products1 = Products.allproducts[];
  //   products2 = Products.allproducts[];
  products3 = Products.allproducts[thirdProductsIndex];

  // change img src on the page to match the 3 new productss
  img1.src = products1.filename;
  img2.src = products2.filename;
  img3.src = products3.filename;
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that Products
  products1.votes++;
  // products1.votes = products1.votes + 1;
  displayThreeNewproducts();
});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  products2.votes++;
  // products1.votes = products1.votes + 1;
  displayThreeNewproducts();
});

img3.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  products3.votes++;
  // products1.votes = products1.votes + 1;
  displayThreeNewproducts();
});



