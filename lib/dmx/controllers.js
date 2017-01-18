const lazier = require('lazier');

module.exports = lazier({
    MatrixMovingHead5x5: './controllers/matrix_moving_head5x5.js',
    MiniWash18: './controllers/mini_wash_18.js',
    Qspot15: './controllers/qspot_15.js'
}, __dirname);
