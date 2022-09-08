input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(50)
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Heart)
    basic.showArrow(ArrowNames.SouthWest)
})
