module.exports = (dst, dst_offset, src, src_offset, length) => {
    for(let i = 0; i < length; ++i) dst[dst_offset + i] = src[src_offset + i];
};
