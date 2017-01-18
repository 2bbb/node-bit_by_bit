const bbb = require('../bbb.js');
const client = bbb.artnet.Clients.create('192.168.1.101');

let frame = 0;

const offset = 100;
let data = client.get();
data[offset + 7] = 255;

// data[0] = 255;
// data[1] = 255;
// data[2] = 255;

// data[offset + 3] = 180;
// data[offset + 109] = 0;
// data[offset + 115] = 60;

// setInterval(function() {
//     data[offset + 109] = frame % 234;
//     data[offset + 112] = frame % 255;
//     frame++;
// }, 50);

// setInterval(function() {
//     const t = frame / 100.0;

//     // data[offset + 1] = 0;
//     // data[offset + 3] = 0 ^ (127.5 * (Math.sin(0.3 * t) + 1.0) * 0.25);
    
//     for(let i = offset + 9; i < offset + 109; i += 4) {
//         const d = i * 0.04;
//         data[i + 0] = 0 ^ (127.5 * (Math.sin(3.0 * t + d) + 1.0));
//         data[i + 1] = 0 ^ (127.5 * (Math.sin(2.9 * t + d) + 1.0));
//         data[i + 2] = 0 ^ (127.5 * (Math.sin(3.1 * t + d) + 1.0));
//         data[i + 3] = 0;
//     }
//     frame++;
// }, 40);
