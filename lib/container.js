const memcpy = (dst, dst_offset, src, src_offset, length) => {
    for(let i = 0; i < length; ++i) dst[dst_offset + i] = src[src_offset + i];
}

// deprecate
const fill = (dst, dst_offset, value, length) => {
    dst.fill(value, dst_offset, dst_offset + length);
};

module.exports = {
    memcpy,
    fill
};
