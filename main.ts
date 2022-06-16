radio.onReceivedNumber(function (receivedNumber) {
    モーター制御コード = receivedNumber
    最後に無線で受信してからの経過時間 = 0
})
let モーター制御コード = 0
let 最後に無線で受信してからの経過時間 = 0
let テスト = 10
led.enable(false)
radio.setGroup(1)
最後に無線で受信してからの経過時間 = 0
basic.forever(function () {
    if (LowLevelGpioLibrary.BitWiseTEST(モーター制御コード, 1)) {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P3, DigitalPinLevel.High)
    } else {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P3, DigitalPinLevel.Low)
    }
})
basic.forever(function () {
    if (LowLevelGpioLibrary.BitWiseTEST(モーター制御コード, 2)) {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P4, DigitalPinLevel.High)
    } else {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P4, DigitalPinLevel.Low)
    }
})
basic.forever(function () {
    if (最後に無線で受信してからの経過時間 >= 10) {
        モーター制御コード = 0
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P3, DigitalPinLevel.Low)
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P4, DigitalPinLevel.Low)
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P6, DigitalPinLevel.Low)
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P7, DigitalPinLevel.Low)
    } else {
        basic.pause(100)
        最後に無線で受信してからの経過時間 += 1
    }
})
basic.forever(function () {
    if (LowLevelGpioLibrary.BitWiseTEST(モーター制御コード, 4)) {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P6, DigitalPinLevel.High)
    } else {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P6, DigitalPinLevel.Low)
    }
})
basic.forever(function () {
    if (LowLevelGpioLibrary.BitWiseTEST(モーター制御コード, 8)) {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P7, DigitalPinLevel.High)
    } else {
        LowLevelGpioLibrary.DigitalWritePin(DigitalPin.P7, DigitalPinLevel.Low)
    }
})
