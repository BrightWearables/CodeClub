brightboard.setBrightness(64)
basic.forever(function () {
    brightboard.setBoardColor(brightboard.randomColor())
    brightboard.show()
    basic.pause(500)
})
