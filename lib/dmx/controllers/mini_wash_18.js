const BaseController = require('../controller/base_controller.js');
const blueprint = require('../blueprint/mini_wash_18.js');

class MiniWash18_mode5ch extends BaseController {
    static create(name, address, buffer, opt = {}) {
        return new this(name, address, buffer, opt);
    }
    constructor(name, address, buffer, opt = {}) {
        super(name, blueprint.mode_5ch, address, buffer, opt);
        this.dimmer_strobe = 255;
        this.pan.move = 127;
        this.tilt.move = 127;
    }
};

class MiniWash18 extends BaseController {
    static create(name, address, buffer, opt = {}) {
        return new this(name, address, buffer, opt);
    }
    constructor(name, address, buffer, opt = {}) {
        super(name, blueprint.mode_12ch, address, buffer, opt);
        this.dimmer_strobe = 255;
        this.pan.move = 127;
        this.tilt.move = 127;
    }
};

MiniWash18.mode5ch = MiniWash18_mode5ch;

module.exports = MiniWash18;
