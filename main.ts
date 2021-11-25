input.onButtonPressed(Button.A, function () {
    etat_actuel = 0
    basic.showIcon(IconNames.Yes)
})
let etat_actuel = 0
let etat_passe = 0
etat_actuel = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
})
