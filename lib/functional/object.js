const forEach = (object, callback) => {
    for(let key in object) callback(key, object[key]);
    return object;
};

const map = (object, callback) => {
    const result = {};
    forEach(object, (key, value) => { result[key] = callback(key, value); });
    return result;
};

const reduce = (object, callback, initial_value) => {
    let result = initial_value;
    forEach(object, (key, value) => {
        result = callback(key, value, result);
    });
    return result;
};

module.exports = { forEach, map, reduce };
