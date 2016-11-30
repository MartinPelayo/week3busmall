'use strict';

var paths = ['bag.jpg', 'dog-duck.jpg', 'pet-sweep.jpg', 'banana.jpg', 'bathroom.jpg',
  'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg','cthulhu.jpg', 'dragon.jpg',
  'pen.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif',
  'water-can.jpg', 'wine-glass.jpg'];
var items = [];
var displayIndex = 0;

var elMain = document.getElementById('image_area');

for (var i = 0; i < paths.lengthl; i++) {
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
      console.log(event);
    }
  }
  changePicture();
}

function itemImage(){
  this.path = 'assets/' + path;
  this.clicked = 0;
}

function changePicture() {
  var imageOne = document.getElementById('image_one');
  var randomIndex = generateRandomNumber();
  console.log(imageOne.src);
  while (displayIndex === randomIndex) {
    randomIndex = generateRandomNumber();
  }

  displayIndex = randomIndex;
  imageOne.src = 'assets/' + paths[randomIndex];

  function generateRandomNumber() {
    return Math.floor(Math.random() * paths.length);
  }

}
