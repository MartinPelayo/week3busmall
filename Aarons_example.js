'use strict';
var paths = ['sweep.png', 'dog-duck.jpg', 'breakfast.jpg'];
var items = [];
var displayIndex = 0;

var elMain = document.getElementById('image_area');

for(var i = 0; i < paths.length; i++) {
  var newItem = new ItemImage(paths[i]);
  items.push(newItem);
}

elMain.addEventListener('click', clickHandler);

function clickHandler(event) {
  var targetString = event.target.src;
  var targetPath = targetString.split('assets')[1];
  var itemPath;

  for (var i = 0; i < items.length; i++) {
    itemPath = items[i].path.split('assets')[1];
    if (itemPath === targetPath) {
      items[i].clicked += 1;
      console.log('clickHandler');
    }
  }

  changePicture();
}

function ItemImage(path) {
  this.path = 'assets/' + path;
  this.clicked = 0;
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var randomIndex = generateRandomNumber();

  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  imageOne.src = 'assets/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }
}
