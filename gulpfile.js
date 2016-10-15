var gulp = require('gulp');

var webpack = require('webpack-stream');

var del = require('del');

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['javascripts']);
});

gulp.task('default', ['clean'] ,function() {
  return gulp.src('src/entry.js')
    .pipe(webpack(require('./webpack.config.js') ))
    .pipe(gulp.dest('public/javascripts/'));
});
