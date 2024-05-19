class Resources {
    constructor(player, enemy, scenes) {
        this.player = {
            src : new Image(player),
            isLoaded : false
        }
        this.enemy = {
            src : new Image(enemy),
            isLoaded : false
        }
        this.scenes = scenes.map(scene => {
            return {
                src: new Image(scene.src),
                x: scene.x,
                y: scene.y,
                isLoaded: false
            }
        })

        this.player.src.onload(() => this.player.isLoaded = true)
        this.enemy.src.onload(() => this.enemy.isLoaded = true)
        for (let i = 0; i < this.scenes.length; i++) {
            this.scenes[i].src.onload(() => this.scenes[i].isLoaded = true)
        }
    }
}