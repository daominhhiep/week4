function Hero(image, top, left, sizeWidth, sizeHeight, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.width = sizeWidth;
  this.height = sizeHeight;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.width + '"' +
      ' height="'+ this.height + '"' +
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
    console.log('ok: ' + this.top);
  }
}

let hero = new Hero('doraemon.png', 10, 10, 244, 215, 10);

function start() {
  if (hero.left < (window.innerWidth - hero.width) && hero.top === 10) {
    hero.moveRight()
  } else if (hero.left >= (window.innerWidth - hero.width) && hero.top < window.innerHeight - hero.height) {
    hero.moveDown()
  } else if (hero.left >= 10 && hero.top >= window.innerHeight - hero.height - 10) {
    hero.moveLeft()
  } else if (hero.left === 0 && hero.top >= 10) {
    hero.moveUp()
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 10)
}
start();
