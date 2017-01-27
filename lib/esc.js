const functional = require('./functional.js');

const Color = {
    Black: 30,
    Red: 31,
    Green: 32,
    Yellow: 33,
    Blue: 34,
    Magenta: 35,
    Cyan: 36,
    White: 37,
    Default: 39
};

module.exports = {
    Clear: {
        Screen: '\033[2J',
        Rightside: '\033[0K',
        Leftside: '\033[1K',
        Line: '\033[2K',
    },
    Move: {
        Pos: (x, y) => `\033[${y};${x}H`,
        Up:    y => `\033[${y}A`,
        Down:  y => `\033[${y}B`,
        Right: x => `\033[${x}C`,
        Left:  x => `\033[${x}D`,
    },
    Color: {
        fg: functional.object.map(Color, value => `\033[${value}`),
        bg: functional.object.map(Color, value => `\033[${10 + value}`)
    },
    Decorate: {
        Default: '\033[0m',
        Bold: '\033[1m',
        Underline: '\033[4m',
        Invert: '\033[7m'
    }
};