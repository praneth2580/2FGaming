const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const listen_keys = Object.keys(window.config.keys);

canvas.width = window.config.canvas_width;
canvas.height = window.config.canvas_height;

context.fillRect(0, 0, canvas.width, canvas.height);

const player = new Sprite(
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

const enemy = new Sprite(
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
  if (listen_keys.includes(key)) window.config.keys[key].pressed = false;
});

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (listen_keys.includes(key)) window.config.keys[key].pressed = true;
});


function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (window.config.keys["a"].pressed && player.isGrounded) {
    player.velocity.x = -10;
  } else if (window.config.keys["d"].pressed && player.isGrounded) {
    player.velocity.x = 10;
  } else {
    player.velocity.x = (parseInt(player.velocity.x) == 0 ? 0 : player.velocity.x * .5);
  }
  if (window.config.keys["w"].pressed) {
    // player.hasGravity = false;
    player.velocity.y = -10;
  } else if (window.config.keys["s"].pressed) {
    player.hasGravity = false;
    player.velocity.y = 10;
  } else {
    player.hasGravity = true;
    // player.velocity.y = 0;
  }
  player.update();
  player_collider.update();
  enemy.update();
}

animate();
