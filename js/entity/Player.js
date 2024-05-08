class Player {
  constructor(context, position, velocity) {
    this.context = context;
    this.position = position;
    this.size = {
      width: 50,
      height: 200,
    };
    this.velocity = velocity;
    this.isJumping = false;
  }

  checkGrounded() {
    this.isGrounded =
      this.position.y + this.size.height >= config.canvas_height;
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
    this.context.moveTo(this.position.x, (this.position.y + this.size.height) - 5);
    this.context.lineTo(this.position.x + this.size.width, (this.position.y + this.size.height) - 5);
    this.context.strokeStyle = 'blue';
    this.context.lineWidth = 10;
    this.context.stroke();
  }

  update() {
    if (!this.isGrounded) {
      this.velocity.y += config.gravity;
    } else if (!this.isJumping) {
      this.velocity.y = 0;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    // if (runOnFrame(current_frame,5)) this.checkGrounded();
    this.checkGrounded();
    this.draw();
  }
}
