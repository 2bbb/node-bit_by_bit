const lazier = require('lazier');

module.exports = lazier({
	functional: './lib/functional.js',
	osc: './lib/osc.js',
	math: './lib/math.js',
	container: './lib/container.js'
}, __dirname);
