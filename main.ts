let gamma = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(255)
let dir = 5
let lvl = 128
basic.forever(function () {
    if (lvl >= 255) {
        lvl = 0
        dir = -5
    } else {
        if (lvl <= 16) {
            lvl = 16
            dir = 5
        } else {
            if (randint(0, 10) == 0) {
                dir = dir * -1
            }
        }
    }
    gamma = lvl * lvl / 255
    strip.showColor(neopixel.rgb(gamma, gamma / 48, gamma / 8))
    lvl += dir
})
