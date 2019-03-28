(function () {
  function Game(map) {
    this.food = new window.Food();
    this.snake = new window.Snake();
    this.map = map;
  }

  Game.prototype.init = function () {
    this.food.init(this.map);
    this.snake.init(this.map);
    this.runSnake(this.food, this.map);
    this.bindKey();
  };

  Game.prototype.runSnake = function (food, map) {
    const timerId = setInterval(() => {
      this.snake.move(food, map);
      this.snake.init(map);
      // 小蛇移动中横坐标最大值
      const maxX = map.offsetWidth / this.snake.width;
      const maxY = map.offsetHeight / this.snake.height;
      const headX = this.snake.body[0].x;
      const headY = this.snake.body[0].y;
      if (headX < 0 || headX >= maxX) {
        clearInterval(timerId);
        alert('GAME OVER!!!');
      }
      if (headY < 0 || headY >= maxY) {
        clearInterval(timerId);
        alert('GAME OVER!!!');
      }
    }, 150);
    // const that = this;
    // setInterval(function () {
    //   this.snake.move(food, map);
    //   this.snake.init(map);
    // }.bind(that), 150);
  };

  Game.prototype.bindKey = function () {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
      case 37:
        this.snake.direction = 'left';
        break;
      case 38:
        this.snake.direction = 'top';
        break;
      case 39:
        this.snake.direction = 'right';
        break;
      case 40:
        this.snake.direction = 'bottom';
        break;
      default:
        break;
      }
    }, false);
  };

  window.Game = Game;
}());
