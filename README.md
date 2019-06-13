# js-handsome-helpers

Time-saving helpers for JavaScript and TypeScript.

## Install

```bash
npm install @dannyfranca/handsome-helpers
```

## Usage

```js
import helpers from '@dannyfranca/handsome-helpers'

const opt = helpers.optionsFromString('x:foo|y:bar')

console.log(opt) // { x: 'foo', y: 'bar' }
```
or

```js
import { optionsFromString } from '@dannyfranca/handsome-helpers'
```

## Methods

[optionsFromString](/docs/optionsFromString.md)
