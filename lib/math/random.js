const random = (from = 1.0, to) => {
    return (to === undefined) ? (from * Math.random()) : (from + (to - from) * Math.random());
};

const randomi = (from = 256, to) => {
    return 0 ^ ((to === undefined) ? (from * Math.random()) : (from + (to - from) * Math.random()));
};

module.exports = { random, randomi };
