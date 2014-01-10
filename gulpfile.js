var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.src('./src/essage.less')
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest('./src'));
});