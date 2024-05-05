const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

context.fillRect(0,0, canvas.width, canvas.height)

const player = new Sprite({
    x: 0,
    y: 0
})

const enemy = new Sprite({
    x: 100,
    y: 100
})

console.log(player)

player.draw(context)
enemy.draw(context)

function animate() {
    window.requestAnimationFrame(animate)
}

animate()