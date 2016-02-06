/* global global */

import setup from './setup'

global.chai = require('chai')
global.sinon = require('sinon')
global.chai.use(require('sinon-chai'))

setup()
