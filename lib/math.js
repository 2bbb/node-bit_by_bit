const random = require('./math/random.js');
const lerp = (from, to, progress) => (to - from) * progress + from;

module.exports = {
    random: random.random,
    randomi: random.randomi,
    lerp
};
