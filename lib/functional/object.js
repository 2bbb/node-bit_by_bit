const forEach = (object, callback) => {
    for(let key in object) callback(object[key], key, object);
    return object;
};

const map = (object, callback) => {
    const result = {};
    forEach(object, (value, key, object) => {
        result[key] = callback(value, key, object);
    });
    return result;
};

const mapKV = (object, callback) => {
    const result = {};
    forEach(object, (value, key, object) => {
        const res = callback(value, key, object);
        result[res.key || key] = (res.value === undefined) ? value : res.value;
    });
    return result;
};

const reduce = (object, callback, initial_value) => {
    let result = initial_value;
    forEach(object, (value, key, obj) => {
        result = callback(result, value, key, obj);
    });
    return result;
};

module.exports = { forEach, map, mapKV, reduce };
