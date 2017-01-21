const Subscriber = require('./osc/subscriber.js');
const Sender = require('./osc/sender.js');

module.exports = {
    Subscriber,
    subscribe: Subscriber.subscribe,
    kill: Subscriber.kill,
    Sender,
    send: Sender.send
};
