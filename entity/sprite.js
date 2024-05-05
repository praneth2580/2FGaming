class Sprite {
  constructor(context, position, velocity) {
    this.context = context;
    this.position = position;
    this.size = {
      width: 50,
      height: 200,
    };
    this.velocity = velocity;
    this.hasGravity = true;
    this.checkGrounded();
  }

  checkGrounded() {
    this.isGrounded =
      this.position.y + this.size.height >= window.config.canvas_height;
  }

  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    this.context.beginPath();
    this.context.moveTo(this.position.x, this.position.y + this.size.height);
    this.context.lineTo(this.position.x + this.size.width, this.position.y + this.size.height);
    this.context.strokeStyle = 'blue';
    this.context.lineWidth = 10;
    this.context.stroke();
  }

  update() {
    if (!this.isGrounded) {
        this.velocity.y += window.config.gravity;
    }
    // if ((this.position.y + this.size.height) > window.config.canvas_height) this.velocity.y = ((this.position.y + this.size.height) - window.config.canvas_height) * -.5;
    if ((this.position.y + this.size.height) > window.config.canvas_height) this.position.y = window.config.canvas_height - this.size.height - 50;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.checkGrounded();
    this.draw();
  }
}
