module.exports = (dst, dst_offset, value, length) => {
    dst.fill(value, dst_offset, dst_offset + length);
};

console.warn('depreacated: bbb.container.fill / use "arr.fill(value, dst_offset, dst_offset + length);"');
