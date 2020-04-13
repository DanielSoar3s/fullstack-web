const gulp = require('gulp');
const { series } = require('gulp')
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');
const concat = require('gulp-concat');


function transformacaoCss() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss( { uglyComments: true } ))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))  
}

exports.default = series(transformacaoCss);