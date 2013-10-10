var isList;
if (typeof window !== 'undefined') {
    // Running in a browser
    isList = (function(window, Node) {
        return function(value) {
            return (
                value &&
                typeof value === 'object' &&
                typeof value.length === 'number' &&
                !(value instanceof Node) &&
                value !== window);
        }
    })(window, window.Node);
} else {
    // Running in non-browser environment
    isList = function(value) {
        return (
            value &&
            typeof value === 'object' &&
            typeof value.length === 'number');
    };
}


function add(array, value) {
    if (isList(value)) {
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
