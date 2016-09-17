var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var reload = browserSync.reload;

module.exports = gulp;

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./",
      directory: true
    },
    port:9239
  });
});

gulp.task('sass', function() {
  gulp.src('styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});
gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch("styles/**/*.scss", ['sass']);
  gulp.watch("styles/*.css", ['bs-reload']);
});
