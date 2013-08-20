function add(array, value) {
    if (typeof value.length === 'number') {
        for (var i = 0; i < value.length; i++) {
            add(array, value[i]);
        }
    } else {
        array.push(value);
    }
}

function flatten(value) {
    var items = [];
    add(items, value);
    return items;
}

module.exports = flatten;