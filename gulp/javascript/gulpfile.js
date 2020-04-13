const gulp = require('gulp');
const { series, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJs( cb ) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', errr => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build')) 
}

function fim( cb ) {
    console.log('Fim !!!');
    return cb();
}

exports.default = series(transformacaoJs,fim);

