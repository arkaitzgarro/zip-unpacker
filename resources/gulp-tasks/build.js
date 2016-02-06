module.exports = function gulpValidate (gulp, plugins, config) {
  gulp.task('build', ['clean'], function () {
    return gulp.src(['src/**/*.js', 'bin/**/*.js'])
      .pipe(plugins.plumber())
      .pipe(plugins.babel({presets: ['es2015']}))
      .pipe(gulp.dest(config.destinationFolder))
  })
}
