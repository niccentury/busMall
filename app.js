'use strict';


var totalclicks = 0;
var pastDisplayed = [];


function Products(displayName, filename) {
  this.displayName = displayName;
  this.filename = filename;
  this.votes = 0;
  this.timesDisplayed = 0;
  Products.allproducts.push(this);
}
Products.allproducts = [];


var products1 = new Products('Bag', 'img/bag.jpg');
var products2 = new Products('Banana', 'img/banana.jpg');
var products3 = new Products('Bathroom', 'img/bathroom.jpg');
// new Products('Boots', 'img/boots.jpg');
// new Products('Breakfast', 'img/breakfast.jpg');
// new Products('Bubblegum', 'img/bubblegum.jpg');
// new Products('Chair', 'img/chair.jpg');
// new Products('Demon', 'img/cthulhu.jpg');
// new Products('Duck Mask', 'img/dog-duck.jpg');
// new Products('Dragon Meat', 'img/dragon.jpg');
// new Products('Pen Utensils', 'img/pen.jpg');
// new Products('Sweep Shoe', 'img/pet-sweep.jpg');
// new Products('Scissors', 'img/scissors.jpg');
// new Products('Sharks', 'img/shark.jpg');
// new Products('Sweep', 'img/sweep.png');
// new Products('Tauntaun', 'img/tauntaun.jpg');
// new Products('Unicorn', 'img/unicorn.jpg');
// new Products('Usb', 'img/usb.gif');
// new Products('Water Can', 'img/water-can.jpg');
// new Products('Wine Glass', 'img/wine-glass.jpg');

console.log(Products.allproducts);

function displayed(){
  products1.timesDisplayed++;
  products2.timesDisplayed++;
  products3.timesDisplayed++;
}

function displayThreeNewproducts() {
  localStorage.setItem('products', JSON.stringify(Products.allproducts));
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



  products1 = Products.allproducts[firstProductIndex];
  products2 = Products.allproducts[secondProductsIndex];
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

// function getVotes(product) {
//   if (totalclicks < 25){
//     totalclicks++;
//     product.votes++;
//     displayThreeNewproducts();
//   }
//   else{
//     //localstorage goes here
//     displayVotes();
//   }
// }


img1.addEventListener('click', function() {
  // add to votes for that Products
  if (totalclicks < 25){
    totalclicks++;
    products1.votes++;
    displayThreeNewproducts();
  }
  else{
    //localstorage goes here
    displayVotes();
  }
  // products1.votes = products1.votes + 1;

});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  if (totalclicks < 25){
    totalclicks++;
    products2.votes++;
    displayThreeNewproducts();
  }
  else{
    //localstorage goes here
    displayVotes();
  }
});

img3.addEventListener('click', function() {
  // what should we do?
  // add to votes for that Products
  if (totalclicks < 25){
    totalclicks++;
    products3.votes++;
    displayThreeNewproducts();
  }
  else{
    //localstorage goes here
    displayVotes();
  }
  // products1.votes = products1.votes + 1;
});

var productData = JSON.parse(localStorage.getItem('Products'));

function storageHold(){
  if(productData){
    console.log('Storage Exists');
    for(var i = 0; i < Products.allproducts.length; i++){
      new Products(productData[i].filename, productData[i].votes, productData[i].timesDisplayed);
    }
  }else{
    new Products('Bag', 'img/bag.jpg');
    new Products('Banana', 'img/banana.jpg');
    new Products('Bathroom', 'img/bathroom.jpg');
    new Products('Boots', 'img/boots.jpg');
    new Products('Breakfast', 'img/breakfast.jpg');
    new Products('Bubblegum', 'img/bubblegum.jpg');
    new Products('Chair', 'img/chair.jpg');
    new Products('Demon', 'img/cthulhu.jpg');
    new Products('Duck Mask', 'img/dog-duck.jpg');
    new Products('Dragon Meat', 'img/dragon.jpg');
    new Products('Pen Utensils', 'img/pen.jpg');
    new Products('Sweep Shoe', 'img/pet-sweep.jpg');
    new Products('Scissors', 'img/scissors.jpg');
    new Products('Sharks', 'img/shark.jpg');
    new Products('Sweep', 'img/sweep.png');
    new Products('Tauntaun', 'img/tauntaun.jpg');
    new Products('Unicorn', 'img/unicorn.jpg');
    new Products('Usb', 'img/usb.gif');
    new Products('Water Can', 'img/water-can.jpg');
    new Products('Wine Glass', 'img/wine-glass.jpg');
    localStorage.setItem('userVotes', JSON.stringify(Products.allproducts));
    console.log('Storage does not exist');
  }
}
storageHold();




function displayVotes(){
  var stopEvent = (function() {
    document.getElementById('stop').setAttribute('style', 'display:none');
  })();

  var displayLabels = Products.allproducts.map(function(product){ return product.displayName; });
  var displayVotes = Products.allproducts.map(function(product){return product.votes; });
  var ctx = document.getElementById('votesChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: displayLabels,
      datasets: [{
        label: '# of Votes',
        data: displayVotes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

// displayVotes();





