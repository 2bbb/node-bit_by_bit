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

module.exports = {
    sender: sender,
    send: (host, port, address, ...values) => {
        sender(host, port).send(address, ...values);
    }
};
