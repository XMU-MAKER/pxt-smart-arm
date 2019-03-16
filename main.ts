basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);

namespace smart-arm {
    function signal_dht11(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0);
        basic.pause(18);
        let i = pins.digitalReadPin(pin);
        pins.setPull(pin, PinPullMode.PullUp);
    }
}
