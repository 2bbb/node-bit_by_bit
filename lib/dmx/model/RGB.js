class RGB {
	constructor(address, buffer) {
		this.address = address;
		this.buffer = buffer;
	}
    get address() { return this.address; }
    
	get(n) { return this.buffer[this.address + n]; }
	set(n, v) { return this.buffer[this.address + n] = v; }
	get r() { return this.get(0); }
	set r(v) { return this.set(0, v); }
	get g() { return this.get(1); }
	set g(v) { return this.set(1, v); }
	get b() { return this.get(2); }
	set b(v) { return this.set(2, v); }
	get rgb() { return this.buffer.slice(address, 3); }
	set rgb(rgb) {
		this.r(rgb[0]);
		this.g(rgb[1]);
		this.b(rgb[2]);
	}
};

module.exports = RGB;