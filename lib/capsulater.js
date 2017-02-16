module.exports = () => {
    const weakmap = new WeakMap();
    return {
        create: (key, obj = {}) => {
            weakmap.set(key, obj);
        },
        get: (key) => {
            return weakmap.get(key);
        }
    };
};
