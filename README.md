# flatten-list

[![NPM](https://nodei.co/npm/flatten-list.png?compact=true)](https://nodei.co/npm/flatten-list/)

[![Build Status](https://drone.io/github.com/conradz/flatten-list/status.png)](https://drone.io/github.com/conradz/flatten-list/latest)
[![Dependency Status](https://gemnasium.com/conradz/flatten-list.png)](https://gemnasium.com/conradz/flatten-list)

Flatten an array or array-like objects.

Reduces nested arrays or array-like objects (like `arguments` or `NodeList` in
the browser) to a single array.

## Example

```js
var flatten = require('flatten-list');

flatten([1, [2, 3]]); // [1, 2, 3]
flatten([1, 2, 3]); // [1, 2, 3]
flatten(1); // [1]

function test() {
    return flatten(arguments);
}

test(1, [2, 3]); // [1, 2, 3];
```