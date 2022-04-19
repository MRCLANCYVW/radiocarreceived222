radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 23) {
        DeskBit.Run(DIR.runForward, 95)
    } else if (receivedNumber == 30) {
        DeskBit.Run(DIR.rightRotation, 69)
    } else {
        if (receivedNumber == 25) {
            DeskBit.Run(DIR.runBack, 48)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    DeskBit.Stop()
})
radio.setGroup(102)
basic.forever(function () {
	
})
