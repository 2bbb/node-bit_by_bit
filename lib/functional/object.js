const forEach = (object, callback) => {
    for(let key in object) callback(key, object[key]);
    return object;
};

const map = (object, callback) => {
    const result = {};
    forEach(object, (key, value) => {
        result[key] = callback(key, value);
    });
    return result;
};

const mapKV = (object, callback) => {
    const result = {};
    forEach(object, (key, value) => {
        const res = callback(key, value);
        result[res.key || key] = (res.value === undefined) ? value : res.value;
    });
    return result;
};

const reduce = (object, callback, initial_value) => {
    let result = initial_value;
    forEach(object, (key, value) => {
        result = callback(key, value, result);
    });
    return result;
};

module.exports = { forEach, map, mapKV, reduce };
