class Player {
  constructor(ctx, position, velocity) {
    this.ctx = ctx;
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
      this.position.y + this.size.height + this.velocity.y > config.canvas_height;
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    this.ctx.beginPath();
    this.ctx.moveTo(this.position.x, (this.position.y + this.size.height) - 5);
    this.ctx.lineTo(this.position.x + this.size.width, (this.position.y + this.size.height) - 5);
    this.ctx.strokeStyle = 'blue';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
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
