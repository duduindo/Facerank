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
var liveServer      = require('live-server');

var paramsLiveServer = {
  port: 8000, // Set the server port. Defaults to 8080.
  host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: "./dist/facerank/www/", // Set root directory that's being server. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  ignore: 'scss,my/templates', // comma-separated string for paths to ignore
  file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
};



gulp.task('jsx', function () {
  browserify({
    entries: './resources/assets/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  //.pipe(convertEncoding({to: 'windows-1252'}))
  .pipe(gulp.dest('./dist/facerank/www/js'))
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

//  Task Server
//
gulp.task('liveserver', function() {
  liveServer.start(paramsLiveServer);
});

gulp.task('watch',['jsx', 'compilecss'],function () {
  gulp.watch(['./resources/assets/js/**/*.jsx'],['jsx']);
  gulp.watch(['./resources/assets/css/**/*.{styl,css}'],['compilecss']);
});

gulp.task('default', ['watch', 'liveserver']);
