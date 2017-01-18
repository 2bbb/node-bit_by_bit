const flatten = (ary) => {
    return ary.reduce(function (p, c) {
        return Array.isArray(c) ? p.concat(flatten(c)) : p.concat(c);
    }, []);
};

module.exports = flatten;