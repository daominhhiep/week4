let ElectricLamp = function () {
    this.state = false;

    this.light = function () {
        if (this.state) {
            return document.getElementById('light').src = "img/light_on.png";
        }
        return document.getElementById('light').src = "img/light_off.png"
    };
};

function flipSwitch() {
    if (bedSwitch.getState()) {
        bedSwitch.switchOff(bedLamp);
    } else {
        bedSwitch.switchOn(bedLamp);
    }
    bedLamp.light();
}