var gulp            = require('gulp');
var browserify      = require('browserify');
var babelify        = require('babelify');
var source          = require('vinyl-source-stream');
var convertEncoding = require('gulp-convert-encoding');
var uglify          = require('gulp-uglify');
var watch           = require('gulp-watch');
var buffer          = require('vinyl-buffer');
var stylus          = require('gulp-stylus');
var rename          = require('gulp-rename');
var sourcemaps      = require('gulp-sourcemaps');

gulp.task('jsx', function () {
  browserify({
    entries: './resources/assets/js/app.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  //.pipe(convertEncoding({to: 'windows-1252'}))
  .pipe(gulp.dest('./dist/facerank/www/js'));
});

gulp.task('minify-jsx', function () {
  browserify({
    entries: './resources/assets/js/app.jsx',
    extensions: ['.jsx'],
    debug: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  //.pipe(convertEncoding({to: 'windows-1252'}))
  .pipe(gulp.dest('./dist/facerank/www/js'));
});


gulp.task('compilecss', function() {
    return gulp
      .src(['resources/assets/css/app.styl'])
      .pipe(sourcemaps.init())
      .pipe(stylus({
        compress: false
      }))
      .pipe(sourcemaps.write())
      .pipe(rename("app.css"))
      .pipe(gulp.dest('./dist/facerank/www/css'));
});


gulp.task('watch',['jsx', 'compilecss'],function () {
  gulp.watch(['./resources/assets/js/**/*.jsx'],['jsx']);
  gulp.watch(['./resources/assets/css/**/*.{styl,css}'],['compilecss']);
});

gulp.task('default', ['watch']);
