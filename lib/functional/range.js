module.exports = (start, end, offset) => {
	if(start === undefined) return [];
	const arr = [];
	if(!end) {
		end = start;
		start = 0;
	}
	offset = offset || 1;
	for(let i = start; i < end; i += offset) arr.push(i);
	return arr; 
}