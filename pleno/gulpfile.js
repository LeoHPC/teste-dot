const { src, dest, watch } = require('gulp');
const uglify = require('gulp-uglify');

const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function stylesMethod() {
  return src("*.css")
    .pipe(concat("all.css"))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist"));
}

function scriptsMethod() {
  return src("js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist"));
}

function watchFiles() {
  watch("./*.css", stylesMethod);
  watch("js/*.js", scriptsMethod);
}

exports.default = watchFiles;
exports.styles = stylesMethod;
exports.scripts = scriptsMethod;