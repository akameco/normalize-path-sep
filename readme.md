# normalize-path-sep

[![Build Status](https://travis-ci.org/akameco/normalize-path-sep.svg?branch=master)](https://travis-ci.org/akameco/normalize-path-sep)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> normalize path sep

## Install

```
$ npm install --save normalize-path-sep
```

## Usage

```js
const normalizePathSep = require('normalize-path-sep')

// macOS or linux
normalizePathSep('/path/to/file')
//=> /path/to/file

// Windows
normalizePathSep('/path/to/file')
//=> \\path\\to\\file
```

## API

### `normalizePathSep(input)`

#### input

Type: `string`

file path.

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/normalize-path-sep/commits?author=akameco "Code") [📖](https://github.com/akameco/normalize-path-sep/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/normalize-path-sep/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
