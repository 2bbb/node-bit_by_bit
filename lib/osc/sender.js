const OSC = require('node-osc');
const senders = {};

const sender = (host, port) => {
    if(host == "localhost") host = "127.0.0.1";
    const unique_id = host + ":" + port;
    if(!senders[unique_id]) {
        senders[unique_id] = new OSC.Client(host, port)
    } 
    return senders[unique_id];
}

sender.send = (host, port, address, ...values) => {
    sender(host, port).send(address, ...values);
};

sender.kill = (host, port) => {
    for(let sender of senders) {
        sender.kill();
    }
};

module.exports = sender;
