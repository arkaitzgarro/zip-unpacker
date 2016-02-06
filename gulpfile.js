'use strict'

var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()
var path = require('path')

var config = require('./package.json')

config.mainFile = config.main
config.destinationFolder = path.dirname(config.mainFile)

// Common tasks
require('./resources/gulp-tasks/common')(gulp, plugins, config)

// Testing and coverage
require('./resources/gulp-tasks/validate')(gulp, plugins, config)

// Build package
require('./resources/gulp-tasks/build')(gulp, plugins, config)
