const { src, dest, series, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

// html tasks
function htmlTask() {
  return src('src/*.html')
  .pipe(dest('dist'));
}

//script tasks
function scriptTask() {
  return src('src/js/*.js')
  .pipe(concat('all.js'))
  .pipe(terser())
  .pipe(dest('dist/js'));
}

//style tasks
function styleTask() {
  return src('src/css/*.css')
  .pipe(concat('all.css'))
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(dest('dist/css'));
}

//images tasks
function imagesTask() {
  return src('src/images/*')
  .pipe(dest('dist/images'));
}

exports.default = series(htmlTask, parallel(scriptTask, styleTask, imagesTask));