const RGB = require('./RGB.js');

class RGBW extends RGB {
	constructor(address, data) {
		super(address, data);
	}
	
	get w() { return this.get(3); }
	set w(v) { return this.set(3, v); }
	get rgbw() { return this.buffer.slice(address, 4); }
	set rgbw(rgbw) {
		this.rgb(rgbw);
		this.w(rgbw[3]);
	}
};
