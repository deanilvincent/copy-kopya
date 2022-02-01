[![Build Status](https://dev.azure.com/dv-github-repos/copy-kopya/_apis/build/status/deanilvincent.copy-kopya?branchName=main)](https://dev.azure.com/dv-github-repos/copy-kopya/_build/latest?definitionId=10&branchName=main)

# Overview

Create an immutable clone or copy of data. This could be an array, object, map, set or function.

# Installation

`npm i copy-kopya --save`

# Setup & Basic Usage

```
const { copy } = require('copy-kopya')
// OR
import { copy } from 'copy-kopya'

const data = [1, 2, 3];

const result = copy(data)

// [1,2,3]
```

## Additional Info

### Options

| Property        | Sample                                    |
| --------------- | ----------------------------------------- |
| ARRAY of data   | `[1, 2, 3]`                               |
| ARRAY of object | `[{ name: "John" }, { name: "Peter" }]`   |
| FUNCTION        | `const test = () => "Hello world";`       |
| MAP             | `const map = new Map(); map.set("a", 1);` |
| SET             | `const set = new Set(); set.add(1);`      |

Credits to: [Chris Ferdinandi](https://vanillajstoolkit.com/helpers/copy/).

Official documentation from [https://gomakethings.com/](https://gomakethings.com/a-better-way-to-create-an-immutable-copy-of-an-array-or-object-with-vanilla-js/)

### Contribute

Feel free to clone or fork this project: `https://github.com/deanilvincent/copy-kopya.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/copy-kopya) :))

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/deanilvincent/copy-kopya/blob/master/LICENSE) file for details.
