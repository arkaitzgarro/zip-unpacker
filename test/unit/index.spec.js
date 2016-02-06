/* global describe, it, expect */

'use strict'

import ZipUnpacker from '../../src/index'

describe('appName test:', () => {
  it('instance is created', () => {
    expect(ZipUnpacker).to.not.be.undefined
  })

  it('options are empty', () => {
    expect(ZipUnpacker.options).to.be.empty
  })

  it('options are set', () => {
    ZipUnpacker.options = {
      version: '0.1.0'
    }
    expect(ZipUnpacker.options.version).to.be.equal('0.1.0')
  })
})
