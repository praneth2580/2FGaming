const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const listen_keys = Object.keys(config.keys);

const resources = Resources('','',"../")

const body_element = document.getElementsByTagName("body")[0];

config.canvas_height = body_element.clientHeight * 0.95;
config.canvas_width = body_element.clientWidth;

canvas.width = config.canvas_width;
canvas.height = config.canvas_height;

ctx.fillRect(0, 0, canvas.width, canvas.height);

const player = new Player(
  ctx,
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  }
);

const enemy = new Player(
  ctx,
  {
    x: 100,
    y: 100,
  },
  {
    x: 0,
    y: 0,
  }
);

const player_collider = new BoxCollider(ctx, 20, player.size.height);
player_collider.bindPlayer(player, "right");

window.addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase();
  if (listen_keys.includes(key)) config.keys[key].pressed = false;
});

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (listen_keys.includes(key)) config.keys[key].pressed = true;
});

function animate() {
  window.requestAnimationFrame(animate);
  current_frame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (config.keys["a"].pressed && (player.isGrounded || player.isJumping)) {
    player.velocity.x = -10;
  } else if (
    config.keys["d"].pressed &&
    (player.isGrounded || player.isJumping)
  ) {
    player.velocity.x = 10;
  } else {
    player.velocity.x =
      parseInt(player.velocity.x) == 0 ? 0 : player.velocity.x * 0.5;
  }
  if (config.keys["w"].pressed) {
    player.velocity.y = -20;
    config.keys["w"].pressed = false;
    player.isJumping = true;
  } else if (config.keys["s"].pressed) {
    player.velocity.y = 10;
  } else {
    player.isJumping = false;
  }
  player.update();
  // player_collider.update();
  // enemy.update();
}

animate();
