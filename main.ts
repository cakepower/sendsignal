radio.setGroup(34)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) == 1) {
        radio.sendNumber(1)
    } else if (pins.analogReadPin(AnalogPin.P2) < 150) {
        radio.sendNumber(2)
    } else if (pins.analogReadPin(AnalogPin.P2) < 260) {
        radio.sendNumber(3)
    } else if (pins.analogReadPin(AnalogPin.P2) < 400) {
        radio.sendNumber(4)
    } else if (pins.analogReadPin(AnalogPin.P2) < 580) {
        radio.sendNumber(5)
    } else {
        radio.sendNumber(0)
    }
})
