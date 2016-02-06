#!/usr/bin/env node

'use strict'

import yargs from 'yargs'

const argv = yargs.usage('Usage: $0 [options] command')
  .showHelpOnFail(false, 'Specify --help for available options')
  .version(() => {
    return require('../../package.json').version
  })
  .help('help')
  .argv

console.log(`Executing ${argv.$0}`)
