const OSC = require('node-osc');
const subscribers = {};

class Subscriber {
    constructor(port) {
        this.port = port;
        this.receiver = new OSC.Server(port, "0.0.0.0");
        this.callbacks = {};
        this.receiver.on("message", (msg, rinfo) => {
            const msgs = Array.isArray(msg[0]) ? msg : [msg];
            msgs.forEach(m => {
                const callbacks = this.callbacks[m[0]];
                if(callbacks) for(const callback of callbacks) callback(m, rinfo);
            });
        });
    }
    subscribe(address, callback) {
        if(this.callbacks[address]) {
            this.callbacks[address].push(callback);
        } else {
            this.callbacks[address] = [callback];
        }
    }
    unsubscribe(address) {
        delete this.callbacks[address];
    }
    notify(address, ...values) {
        const callbacks = this.callbacks[address];
        if(callbacks) for(const callback of callbacks) callback(msg, []);
    }
    static subscribe(port, address, callback) {
        if(!subscribers[port]) {
            subscribers[port] = new Subscriber(port);
        }

        subscribers[port].subscribe(address, callback);
    }
    static unsubscribe(port, address) {

    }
};

module.exports = {
    subscribe: Subscriber.subscribe,
    unsubscribe: Subscriber.unsubscribe
};
