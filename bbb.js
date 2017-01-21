const lazier = require('lazier');

module.exports = lazier({
	functional: './lib/functional.js',
	osc: './lib/osc.js'
}, __dirname);
