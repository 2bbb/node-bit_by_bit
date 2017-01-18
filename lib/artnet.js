const artnet = require('artnet-node');

class Clients {
    constructor(ip = '127.0.0.1', opt = {}) {
        this.ip = ip;
        this.port = opt.port || 6454;
        this.size = opt.size || 512;
        if(opt.buffer) {
            this.data = opt.buffer;
        } else {
            this.data = [];
            for(let i = 0; i < this.size; i++) this.data.push(0);
        }
        // if(opt.buffer) {
        //     this.data = (opt.buffer instanceof Uint8Array) ? opt.buffer : new Uint8Array(opt.buffer);
        // } else {
        //     this.data = new Uint8Array(this.size);
        //     this.data.fill(0);
        // }

        this.client = artnet.Client.createClient(this.ip, this.port);
        this.timer = setInterval(() => {
            this.send();
        }, 25);
    }

    set(data) {
        if(!data) return;
        
        const length = Math.min(data.length, this.data.length);
        for(let i = 0; i < length; ++i) this.data[i] = data[i];
    }

    get() { return this.data; }

    send(data) {
        if(data) this.set(data);
        this.client.send(this.get());
    }

    static create(ip, port) {
        return new Clients(ip, port);
    }
};

module.exports = {
    Clients
};