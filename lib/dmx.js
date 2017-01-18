const lazier = require('lazier');

module.exports = lazier({
    model: './dmx/model.js',
    controller: './dmx/controller.js',
    blueprint: './dmx/blueprint.js',
    controllers: './dmx/controllers.js'
}, __dirname);
