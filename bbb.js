const lazier = require('lazier');

const bbb = lazier.from('./lib', __dirname);
bbb.lazier = lazier;

module.exports = bbb;
