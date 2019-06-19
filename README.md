# @dannyfranca/js-handsome-helpers

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

Time-saving helpers for JavaScript and TypeScript.

## Install

```bash
npm install @dannyfranca/handsome-helpers
```

## Usage

### Default
```js
import helpers from '@dannyfranca/handsome-helpers'

const opt = helpers.optionsFromString('x:foo|y:bar')

console.log(opt) // { x: 'foo', y: 'bar' }
```
or

```js
import anyMethod from '@dannyfranca/handsome-helpers/lib/helpers/anyMethod'
```

### Proxyed

```js
import helpers from '@dannyfranca/handsome-helpers/lib/proxyhelpers'

// Works just right the defaults
const opt = helpers.optionsFromString('x:foo|y:bar')

console.log(opt) // { x: 'foo', y: 'bar' }
```

####But now you can add and merge your custom helpers

##### Adding/Overwriting

```js
import helpers from '@dannyfranca/handsome-helpers/lib/proxyhelpers'

// with chainable method $add
helpers
    .$add('customHelper1', function(...args) {
      // ...
    })
    .$add('customHelper2', function(...args) {
      // ...
    })
    
//directly
helpers.customHelpers = function(...args) {
  // ...
}

//  Dont try to name with $, with throw an Error
helpers.$customHelpers = function(...args) {
  // ...
}
```

##### Merging

```js
import helpers from '@dannyfranca/handsome-helpers/lib/proxyhelpers'

helpers.$merge({
    customHelper() {
      // ...
    },
// ...
})
```

## Methods

To see a list of use cases and expected results, look at the [test folder](./test).

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <contato@dannyfranca.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dannyfranca/handsome-helpers.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dannyfranca/handsome-helpers

[npm-downloads-src]: https://img.shields.io/npm/v/@dannyfranca/handsome-helpers/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dannyfranca/handsome-helpers

[circle-ci-src]: https://img.shields.io/circleci/project/github/dannyfranca/js-handsome-helpers.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/dannyfranca/js-handsome-helpers

[codecov-src]: https://img.shields.io/codecov/c/github/dannyfranca/js-handsome-helpers.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/dannyfranca/js-handsome-helpers

[david-dm-src]: https://david-dm.org/dannyfranca/js-handsome-helpers/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dannyfranca/js-handsome-helpers

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
