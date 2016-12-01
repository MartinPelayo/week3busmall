'use strict';

var paths = ['bag.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'banana.jpg', 'bathroom.jpg',
  'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg','cthulhu.jpg', 'dragon.jpg',
  'pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif',
  'water-can.jpg', 'wine-glass.jpg'];
var items = [];
var displayIndices = [0, 0, 0];

var elMain = document.getElementById('image_area');

for (var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

elMain.addEventListener('click', clickHandler);

function clickHandler(event) {
  var targetString = event.target.src;

  addClicks(targetString);
  changePicture();
}

function ItemImage(path) {
  this.path = 'assets/' + path;
  this.clicked = 0;
  console.log(path);
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var imageTwo = document.getElementById('image_two');
  var imageThree = document.getElementById('image_three');
  var indices = generateRandomIndices();

  imageOne.src = items[indices[0]].path;
  imageTwo.src = items[indices[1]].path;
  imageThree.src = items[indices[2]].path;

  displayIndices = indices;

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }

  function generateRandomIndices() {
    var randomIndexOne = generateRandomNumber();
    var randomIndexTwo = generateRandomNumber();
    var randomIndexThree = generateRandomNumber();

    while (randomIndexTwo === randomIndexOne) {
      randomIndexTwo = generateRandomNumber();
    }
    while (randomIndexThree === randomIndexTwo
      || randomIndexThree === randomIndexOne) {
      randomIndexThree = generateRandomNumber();
    }

    return [randomIndexOne, randomIndexTwo, randomIndexThree];
  }
}

function addClicks(path) {
  var targetPath = path.split('assets')[1];
  var itemPath;

  for (var i = 0; i < items.length; i++) {
    itemPath = items[i].path.split('assets')[1];
    if (itemPath === targetPath) {
      items[i].clicked += 1;
    }
  }
}
function renderChart() {
  var ctx  = document.getElementById('my_chart');
  var chartConfig = {

  };

  var myChart = new Chart(ctx, chartConfig);
}
