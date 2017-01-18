const lazier = require('lazier');

module.exports = lazier({
	functional: './lib/functional.js',
	osc: './lib/osc.js',
	artnet: './lib/artnet.js',
	dmx: './lib/dmx.js'
}, __dirname);
