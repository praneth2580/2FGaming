class BoxCollider {
  constructor(context, width, height) {
    this.context = context;
    this.size = {
      width,
      height,
    };
    this.position = {
      x: 0,
      y: 0,
    };
  }

  bindPlayer(player, side) {
    this.player = player;
    this.side = side;
  }

  draw() {
    this.context.strokeStyle = "green";
    this.context.lineWidth = 2;
    this.context.strokeRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update() {
    if (this.player) {
      switch (this.side) {
        case "top":
          this.position.x = this.player.position.x;
          this.position.y = this.player.position.y - this.size.height;
          break;
        case "bottom":
          this.position.x = this.player.position.x;
          this.position.y = this.player.position.y + this.player.size.height;
          break;
        case "left":
          this.position.x = this.player.position.x - this.size.width;
          this.position.y = this.player.position.y;
          break;
        case "right":
          this.position.x = this.player.position.x + this.player.size.width;
          this.position.y = this.player.position.y;
          break;
        default:
          this.position.x = this.player.position.x + this.player.size.width;
          this.position.y = this.player.position.y;
          break;
      }
      this.draw();
    }
  }
}
