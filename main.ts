makerbit.connectLcd(39)
basic.forever(function () {
    makerbit.showStringOnLcd1602("Temp: " + input.temperature(), makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("Luz: " + Math.round(pins.map(
    input.lightLevel(),
    0,
    255,
    0,
    100
    )), makerbit.position1602(LcdPosition1602.Pos17), 16)
    basic.pause(2000)
})
