function list() {
	const args = Array.prototype.slice.call(arguments, 1);
	args[0] = arguments[0] + args[0];
	outlet(0, args);
}