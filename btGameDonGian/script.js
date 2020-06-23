function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
    this.top += this.speed;
    console.log('ok: ' + this.top);
  }
  this.moveLeft = function () {
    this.left -= this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveUp = function () {
    this.top -= this.speed;
    console.log('ok: ' + this.up);
  }
}

let hero = new Hero('doraemon.png', 20, 20, 150, 50);
let moveX = 1;
let moveY = 1;

function start() {
  if ((hero.left > window.innerWidth - hero.size) || (hero.left < 0)) {
    moveX = -moveX;
  }
  if (moveX > 0) {
    hero.moveRight();
  } else hero.moveLeft();
  if ((hero.top > window.innerHeight - hero.size) || (hero.top < 0)) {
    moveY = -moveY;
  }
  if (moveY > 0) {
    hero.moveDown();
  } else hero.moveUp();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100);
}

start();
