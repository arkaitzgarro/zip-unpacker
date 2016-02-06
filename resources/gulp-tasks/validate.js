var isparta = require('isparta')

module.exports = function gulpValidate (gulp, plugins, config) {
  var test = function test () {
    return gulp.src(['test/setup/node.js', 'test/unit/**/*.js'], {read: false})
      .pipe(plugins.mocha({globals: config.babelOptions.mochaGlobals}))
  }

  gulp.task('test', ['build'], function () {
    require('babel-core/register')

    return test()
  })

  gulp.task('coverage', function (done) {
    require('babel-core/register')

    gulp.src(['src/**/*.js', '!src/**/cli.js'])
      .pipe(plugins.istanbul({ instrumenter: isparta.Instrumenter }))
      .pipe(plugins.istanbul.hookRequire())
      .on('finish', function () {
        return test()
          .pipe(plugins.istanbul.writeReports({dir: './reports/coverage'}))
          .on('end', done)
      })
  })
}
