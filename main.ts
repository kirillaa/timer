let timer = 0
let set_time = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    timer += 0 - 1
    basic.showNumber(timer)
})
input.onButtonPressed(Button.B, function () {
    timer += 0 + 1
    basic.showNumber(timer)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("Timer")
    basic.showString("" + timer + "hr.")
    set_time = timer * 3600
    led.setBrightness(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 25; index++) {
        basic.pause(set_time / 25)
        x = x + 1
        led.unplot(-1 + x, 0 + y)
        if (x > 4) {
            x = 0
            y = y + 1
        }
    }
    x = 0
    y = 0
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    basic.showString("Time to eat")
    music.stopAllSounds()
    timer = 0
})
