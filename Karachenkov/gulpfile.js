'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('css/base.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', function() {
    return gulp.src('styles/base.scss')
        .pipe(sass.sync().on(('error'), sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function(){
   gulp.watch("styles/*.scss", ['sass']);
});

var mmq = require('gulp-merge-media-queries');

gulp.task('mmq', function(){
    gulp.src('css/base.css')
        .pipe(mmq({
          log: true
        }))
        .pipe(gulp.dest('dist'));
});
