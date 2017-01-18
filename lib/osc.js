const sender = require('./osc/sender.js');
const subscriber = require('./osc/subscriber.js');
module.exports = {
    subscribe: subscriber.subscribe,
    sender: sender,
    send: sender.send
};