const memcpy = (dst, dst_offset, src, src_offset, length) => {
    for(let i = 0; i < length; ++i) dst[dst_offset + i] = src[src_offset + i];
}

const make_rgb = (led_address) => {
    return {
        set: (values, buffer, address) => {
            memcpy(buffer, address + led_address - 1, values, 0, 3);
        },
        0: led_address,
        1: led_address + 1,
        2: led_address + 2,
        r: led_address,
        g: led_address + 1,
        b: led_address + 2,
    };
};

const make_rgbw = (led_address) => {
    return {
        set: (values, buffer, address) => {
            memcpy(buffer, address + offset - 1, values, 0, 4);
        },
        0: led_address,
        1: led_address + 1,
        2: led_address + 2,
        3: led_address + 3,
        r: led_address,
        g: led_address + 1,
        b: led_address + 2,
        w: led_address + 3
    };
};

const make_range = (from, to) => ({ from, to });

module.exports = {
    memcpy,
    make_rgb,
    make_rgbw,
    make_range
};