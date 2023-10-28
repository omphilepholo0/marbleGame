input.onGesture(Gesture.LogoUp, function () {
    mabble.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    mabble.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    mabble.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    mabble.change(LedSpriteProperty.Y, -1)
})
let emptyObstacleY = 0
let mabble: game.LedSprite = null
let index = 0
let ticks = 0
let obstacles: game.LedSprite[] = []
mabble = game.createSprite(0, 2)
mabble.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle1 of obstacles) {
        obstacle1.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        mabble.change(LedSpriteProperty.X, -1)
    }
    for (let obstacle2 of obstacles) {
        if (obstacle2.get(LedSpriteProperty.X) == mabble.get(LedSpriteProperty.X) && obstacle2.get(LedSpriteProperty.Y) == mabble.get(LedSpriteProperty.Y)) {
            game.gameOver()
        } else {
            if (obstacle2.get(LedSpriteProperty.X) == 0 && obstacle2.get(LedSpriteProperty.Y) == 0) {
                game.addScore(1)
            }
        }
    }
    ticks += 1
    basic.pause(1000)
})
