etat_passe = 0
etat_actuel = 0

def on_forever():
    global etat_actuel
    etat_actuel = pins.digital_read_pin(DigitalPin.P16)
    if etat_actuel != etat_passe:
        if etat_actuel == 1:
            basic.show_leds("""
                . . # . .
                                . . # . .
                                . . # . .
                                . . . . .
                                . . # . .
            """)
basic.forever(on_forever)

def on_forever2():
    if True:
        pass
basic.forever(on_forever2)
