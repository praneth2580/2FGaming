const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const listen_keys = Object.keys(config.keys);

canvas.width = config.canvas_width;
canvas.height = config.canvas_height;

context.fillRect(0, 0, canvas.width, canvas.height);

const player = new Player(
  context,
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
  context,
  {
    x: 100,
    y: 100,
  },
  {
    x: 0,
    y: 0,
  }
);

const player_collider = new BoxCollider(context, 20, player.size.height);
player_collider.bindPlayer(player, 'right');

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
  current_frame++
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (config.keys["a"].pressed && (player.isGrounded || player.isJumping)) {
    player.velocity.x = -10;
  } else if (config.keys["d"].pressed && (player.isGrounded || player.isJumping)) {
    player.velocity.x = 10;
  } else {
    player.velocity.x = (parseInt(player.velocity.x) == 0 ? 0 : player.velocity.x * .5);
  }
  if (config.keys["w"].pressed) {
    player.velocity.y = -10;
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
