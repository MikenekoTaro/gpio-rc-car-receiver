//
// micro:bit V2用低水準GPIOライブラリ
// Copyright (C) 2022 Katayanagi Lab.

/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

const enum DigitalPinLevel {
    //% block="High"
    //% blockIdentity="LowLevelGpioLibrary.DigitalReadPin"
    High = 1,
    //% block="Low"
    //% blockIdentity="LowLevelGpioLibrary.DigitalReadPin"
    Low = 0,
}

/**
 * Low Level GPIO Library
 */
//% block="Low Level GPIO"
//% block.loc.ja="低水準GPIO"
//% weight=100 color=#008080 icon="\uf2db" advanced=true
namespace LowLevelGpioLibrary {
    //% enumIdentity="DigitalPinLevel.High"
    export const HIGH = DigitalPinLevel.High
    //% enumIdentity="DigitalPinLevel.Low"
    export const LOW = DigitalPinLevel.Low

    /**
     * ピンのプルモードを設定する
     * @param name Pin Name: DigitalPin
     * @param mode Pull Mode: PinPullMode
     */
    //% block="Set pull pin $name to $mode　" 
    //% block.loc.ja="$nameのピンを$modeする"
    export function SetPinPullMode(name: DigitalPin, mode: PinPullMode): void {
        let pin = new MicrobitPin(name)
        pin.setPull(mode)
        return
    }

    /**
    * デジタルピンの状態を調べる
    * @param name Pin Name: DigitalPin
    * @param level Level: DigitalPinLevel
    */
    //% block="Pin $name is $level"
    //% block.loc.ja="ピン $name の入力が $level"
    export function DigitalReadPin(name: DigitalPin, level: DigitalPinLevel): boolean {
        let val = new MicrobitPin(name).digitalRead()
        return level === DigitalPinLevel.High ? val : !val
    }

    /**
    * デジタルピンの出力を設定する
    * @param name Pin Name: DigitalPin
    * @param level Level: DigitalPinLevel
    */
    //% block="Set pin $name to $level"
    //% block.loc.ja="ピン $name を $level に設定する"
    export function DigitalWritePin(name: DigitalPin, level: DigitalPinLevel): void {
        let pin = new MicrobitPin(name)
        pin.digitalWrite(level === HIGH ? true : false)
    }

    /**
    * アナログピンの入力を調べる
    * @param name Pin Name: DigitalPin
    */
    //% block="Value from pin $name"
    //% block.loc.ja="ピン $name の値"
    export function AnalogReadPin(name: AnalogPin): number {
        let pin = new MicrobitPin(name)
        return pin.analogRead()
    }

    /**
    * アナログピンの出力を設定する
    * @param name Pin Name: DigitalPin
    * @param val output level eg: 0 - 1023: number
    */
    //% block="Write $val to pin $name"
    //% block.loc.ja="ピン $name に $val を書き込む"
    //% val.min=0, val.max=1023, val.defl=0
    export function AnalogWritePin(name: AnalogPin, val: number): void {
        let pin = new MicrobitPin(name)
        pin.analogWrite(val)
        return
    }

    /**
    * ビット毎のAND計算
    * @param dest Destination variable: number
    * @param src Source variable: number
    */
    //% block="Bit-wise AND of $dest and $src"
    //% block.loc.ja="$destと$srcのビットごとのAND"
    export function BitWiseAND(dest: number, src: number): number {
        return (dest & src) // ビット毎AND （≠ 論理AND &&)
    }

    /**
    * ビット毎のOR計算
    * @param dest Destination variable: number
    * @param src Source variable: number
    */
    //% block="Bit-wise OR of $dest and $src"
    //% block.loc.ja="$destと$srcのビットごとのOR"
    export function BitWiseOR(dest: number, src: number): number {
        return (dest | src) // ビット毎OR （≠ 論理OR ||)
    }

    /**
    * ビットテスト
    * ビット毎のAND計算の結果が非0ならTrue, 0ならFalse
    * @param dest Destination variable: number
    * @param src Source variable: number
    */
    //% block="the result of bit-wise AND of $dest and $src is not 0"
    //% block.loc.ja="$destと$srcのビットごとのANDの結果が0では無い"
    export function BitWiseTEST(dest: number, src: number): boolean {
        return (dest & src) != 0
    }

}
