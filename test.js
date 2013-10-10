var test = require('tape'),
    flatten = require('./');

test('flatten a nested array', function(t) {
    t.deepEqual(
        flatten([1, [2, 3]]),
        [1, 2, 3]);

    t.deepEqual(
        flatten([[1], [2]]),
        [1, 2]);

    t.end();
});

test('return single object array for an object', function(t) {
    t.deepEqual(flatten(1), [1]);
    t.end();
});

test('allow arguments object', function(t) {
    function test() {
        return flatten(arguments);
    }

    t.deepEqual(test(1, [2, 3]), [1, 2, 3]);
    t.end();
});

test('preserve original objects', function(t) {
    var value = {},
        result = flatten([value]);
    t.equal(value, result[0]);
    t.end();
});

test('allow array-like objects', function(t) {
    var value = { length: 2, '0': 1, '1': [2, 3] };
    t.deepEqual(flatten(value), [1, 2, 3]);
    t.end();
});

test('do not convert string to array', function(t) {
    var value = 'foo';
    t.deepEqual(flatten(value), [value]);
    t.end();
});

test('allow falsy values', function(t) {
    t.deepEqual(flatten(null), [null]);
    t.deepEqual(flatten(false), [false]);
    t.deepEqual(flatten(undefined), [undefined]);
    t.deepEqual(flatten(''), ['']);
    t.end();
});

if (typeof window !== 'undefined') {
    // In a browser

    test('do not convert elements to array', function(t) {
        var value = document.createElement('form');
        t.deepEqual(flatten(value), [value]);
        t.end();
    });

    test('do not convert window to array', function(t) {
        t.deepEqual(flatten(window), [window]);
        t.end();
    });

}
