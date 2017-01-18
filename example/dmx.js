const { dmx, functional, artnet } = require('../bbb.js');

const client = artnet.Clients.create('192.168.1.101', { size: 256 });
const buffer = client.get();

const mini_wash18 = dmx.controllers.MiniWash18.create(
    "mini18_1",
    1,
    buffer,
    { osc_port: 8888 }
);

const controller = dmx.controllers.MatrixMovingHead5x5.create(
    "left",
    101,
    buffer,
    { osc_port: 8888 }
);

// controller.master = 255;
setInterval(() => {
    console.log(new Date(), JSON.stringify(buffer));
}, 500);
