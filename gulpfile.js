const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');

gulp.task('webserver', () => {
    connect.server({
        livereload: true
    });
});
gulp.watch([
    'js/*.js',
    'lib/*.js'
]);
gulp.task('default', [
    'webserver'
]);
