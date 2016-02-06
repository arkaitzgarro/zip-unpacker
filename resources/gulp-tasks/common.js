var del = require('del')

module.exports = function gulpValidate (gulp, plugins, config) {
  gulp.task('clean', function (done) {
    del([config.destinationFolder]).then(function () {
      done()
    })
  })
}
