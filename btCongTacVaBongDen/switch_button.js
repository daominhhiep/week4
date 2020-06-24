let SwitchButton = function (device) {
    this.state = false;
    this.linkTo = device;
    this.getState = function () {
        return this.state;
    };
    this.getDevice = function () {
        return this.linkTo;
    };
    this.switchOn = function (device) {
        this.state = true;
        device.state = true;
        document.getElementById('switch').src = "img/switch_on.png";
    };

    this.switchOff = function (device) {
        this.state = false;
        device.state = false;
        document.getElementById('switch').src = "img/switch_off.png";
    };
};
