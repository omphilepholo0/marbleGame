let index = 0
let obstacles: number[] = []
let mabble = game.createSprite(0, 3)
mabble.set(LedSpriteProperty.Blink, 200)
basic.forever(function () {
    let x = 0
    while (obstacles.length > 0 && obstacles[x] == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
})
