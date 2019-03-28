(function () {
  const elements = [];

  function Food(x, y, width, height, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 20;
    this.color = color || 'green';
  }

  function remove() {
    for (let i = 0; i < elements.length; i++) {
      const ele = elements[i];
      ele.parentNode.removeChild(ele);
      elements.splice(i, 1);
    }
  }

  Food.prototype.init = function (map) {
    remove();
    const div = document.createElement('div');
    map.appendChild(div);
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.backgroundColor = this.color;
    div.style.position = 'absolute';
    const x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    const y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
    console.log(x, y);
    this.x = x;
    this.y = y;
    div.style.left = `${this.x}px`;
    div.style.top = `${this.y}px`;

    elements.push(div);
  };

  window.Food = Food;
}());
