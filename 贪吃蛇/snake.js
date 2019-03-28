(function () {
  const elements = [];
  function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || 'right';
    this.body = [
      { x: 3, y: 2, color: 'red' },
      { x: 2, y: 2, color: 'orange' },
      { x: 1, y: 2, color: 'orange' },
    ];
  }

  function remove() {
    let i = elements.length - 1;
    for (; i >= 0; i--) {
      const ele = elements[i];
      ele.parentNode.removeChild(ele);
      elements.splice(i, 1);
    }
  }

  Snake.prototype.init = function (map) {
    remove();
    for (let i = 0; i < this.body.length; i++) {
      const obj = this.body[i];

      const div = document.createElement('div');
      map.appendChild(div);
      div.style.position = 'absolute';
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.style.left = `${obj.x * this.width}px`;
      div.style.top = `${obj.y * this.height}px`;
      div.style.backgroundColor = obj.color;

      elements.push(div);
    }
  };

  Snake.prototype.move = function (food, map) {
    let i = this.body.length - 1;
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }

    switch (this.direction) {
    case 'top':
      this.body[0].y -= 1;
      break;
    case 'right':
      this.body[0].x += 1;
      break;
    case 'bottom':
      this.body[0].y += 1;
      break;
    case 'left':
      this.body[0].x -= 1;
      break;
    default:
      break;
    }

    const headX = this.body[0].x * this.width;
    const headY = this.body[0].y * this.height;
    const foodX = food.x;
    const foodY = food.y;

    if (headX === foodX && headY === foodY) {
      const lastBody = this.body[this.body.length - 1];
      this.body.push({
        x: lastBody.x,
        y: lastBody.y,
        color: lastBody.color,
      });
      console.log(this.body);
      food.init(map);
    }
  };

  window.Snake = Snake;
}());
