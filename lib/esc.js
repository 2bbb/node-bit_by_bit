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
    Palette256: 38,
    PaletteRGB: 38,
    Default: 39
};

module.exports = {
    Reset: '\033[0m',
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
        Fg: functional.object.map(Color, (value, key) => {
            if(key == 'Palette256') return (index) => `\033[${value};5;${index}m`;
            if(key == 'PaletteRGB') return (r, g, b) => `\033[${value};2;${r};${g};${b}m`;
            return `\033[${value}m`;
        }),
        FgEx: functional.object.map(COlor, (value, key) => {
            if(key == 'Palette256') return () => '';
            if(key == 'PaletteRGB') return () => '';
            if(key == 'Default') return '\033[39m';
            return `\033[${value + 60}m`;
        }),
        Bg: functional.object.map(Color, (value, key) => {
            if(key == 'Palette256') return (index) => `\033[${value + 10};5;${index}m`;
            if(key == 'PaletteRGB') return (r, g, b) => `\033[${value + 10};2;${r};${g};${b}m`;
            return `\033[${value + 10}m`;
        }),
        BgEx: functional.object.map(COlor, (value, key) => {
            if(key == 'Palette256') return () => '';
            if(key == 'PaletteRGB') return () => '';
            if(key == 'Default') return '\033[49m';
            return `\033[${value + 70}m`;
        }),
    },
    Decorate: {
        Default: '\033[0m',
        Bold: '\033[1m',
        Pale: '\033[2m',
        Italic: '\033[3m',
        Underline: '\033[4m',
        Blink: '\033[5m',
        BlinkHS: '\033[6m',
        Invert: '\033[7m',
        Hidden: '\033[8m',
        Strike: '\033[9m',
    }
};