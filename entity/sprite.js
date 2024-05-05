class Sprite {
  constructor(position,velocity) {
    this.position = position;
    this.size = {
      width: 50,
      height: 200,
    };
    this.velocity = velocity
  }

  draw(context) {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }
}
