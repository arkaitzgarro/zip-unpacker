# zip-unpacker

[![Coverage Status](https://coveralls.io/repos/arkaitzgarro/zip-unpacker/badge.svg?branch=master&service=github)](https://coveralls.io/github/arkaitzgarro/zip-unpacker?branch=master)
[![Build Status](https://travis-ci.org/arkaitzgarro/zip-unpacker.svg?branch=master)](https://travis-ci.org/arkaitzgarro/zip-unpacker)
[![Dependency Status](https://david-dm.org/arkaitzgarro/zip-unpacker.svg)](https://david-dm.org/arkaitzgarro/zip-unpacker)
[![devDependency Status](https://david-dm.org/arkaitzgarro/zip-unpacker/dev-status.svg)](https://david-dm.org/arkaitzgarro/zip-unpacker#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

ZIP unpacker tool for Node.js

### API

* `extractFromFile` extracts a zip file into a target directory.

```javascript
import unpacker from 'zip-unpacker'

// Specify a file and target directory
unpacker
  .extractFromFile('/path/to/file.zip', '/tmp/destination')
  .then((files) => {
    console.log(files) // An array of unpacked paths to files
    console.log('Done!')
  })
```

Listen to each file extracted:

```javascript
import unpacker from 'zip-unpacker'

unpacker
  .configure({
    onExtract: (entry) => {
      console.log(entry.path)
    }
  })
  .extractFromFile('/path/to/file.zip', '/tmp/destination')
  .then(() => {
    console.log('Done!')
  })
  .catch((err) => {
    console.log('Something went wrong ', err)
  })
```

* `extractFromURL` extracts a zip from URL into a target directory.

```javascript
import unpacker from 'zip-unpacker'

// Specify a URL and target directory
unpacker
  .extractFromFile('http://www.arkaitzgarro.com/file.zip', '/tmp/destination')
  .then((files) => {
    console.log(files) // An array of unpacked paths to files
    console.log('Done!')
  })
  .catch((err) => {
    console.log('Something went wrong ', err)
  })
```

* Create instances of `unpacker` if needed

```javascript
import {Unpacker} from 'zip-unpacker'

// Create a new instance of Unpacker
const unpacker = new Unpacker()

unpacker
  .extractFromFile('http://www.arkaitzgarro.com/file.zip', '/tmp/destination')
  .then(() => {
    console.log('Done!')
  })
  .catch((err) => {
    console.log('Something went wrong ', err)
  })
```

### Command line

It's also possible to use `unpacker` as a command line utility, you just need to
install it globally with `npm install -g zip-unpacker`. Here is the help command
output.

```javascript
Usage: unpacker (<source path> | <url>) <destination folder>

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

Examples:
  unpacker /tmp/file.zip /tmp/unpacked
  unpacker http://www.arkaitzgarro.com/file.zip /tmp/unpacked
```
