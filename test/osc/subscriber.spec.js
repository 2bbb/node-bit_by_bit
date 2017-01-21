const {osc} = require('bbb.js');

jasmine.getEnv().defaultTimeoutInterval = 1500;

describe('bbb.osc.Subscriber:', () => {
    describe('bbb.osc.Subscriber', () => {
        it('exist Subscriber', () => {
            expect(osc.Subscriber).toBeDefined();
        });
        const {Subscriber} = osc;
    });

    describe('bbb.osc.subscribe', () => {
        it('exist subscribe', () => {
            expect(osc.subscribe).toBeDefined();
        });
        it('bbb.osc.subscribe is bbb.osc.Subscriber.subscribe', () => {
            expect(osc.subscribe).toBe(osc.Subscriber.subscribe);
        });

        const port = 26666;
        // it('subscribe test', (done) => {
        //     osc.subscribe(port, '/test', (m, rinfo) => {
        //         expect(m[0]).toBeEqual('/test');
        //         osc.kill(port);
        //         done();
        //     });
        //     setTimeout(() => {
        //         osc.send('localhost', port, '/test', 1, 2, 3);
        //         osc.Sender.kill();
        //     }, 1000);
        // });
    });

    describe('bbb.osc.kill', () => {
        it('exist kill', () => {
            expect(osc.kill).toBeDefined();
        });
        it('bbb.osc.kill is bbb.osc.Subscriber.kill', () => {
            expect(osc.kill).toBe(osc.Subscriber.kill);
        });
    });
});
