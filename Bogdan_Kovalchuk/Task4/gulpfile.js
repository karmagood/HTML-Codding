'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    browser = require('browser-sync').create();

var paths = {
    js: './**/*.js',
    jsdir: './js',
    scripts: './scripts/**/*.js',
    scss: [
        './style/scss/**/*.scss',
        '!style/scss/**/*_scsslint_tmp*.scss'
    ],
    cssdir: './style/css',
    html: './**/*.html'
};

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.cssdir));
});

gulp.task('watch', function () {
    browser.init({
        server: {
            baseDir: './'
        }
        //if you use local server
        //,proxy: {target: 'http://project.local/',
        //ws :true},
        //online: true
    });
    gulp.watch(paths.scss, ['sass']);
    gulp.watch([paths.html, paths.js]).on('change', browser.reload);
});



//Default
// gulp.task('default', ['clean', 'sassDev', 'jsDev', 'jsHint', 'watch']);
gulp.task('default', ['sass','watch']);
