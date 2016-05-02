import gulp             from 'gulp';
import browserify       from 'browserify';
import babelify         from 'babelify';
import source           from 'vinyl-source-stream';
import convertEncoding  from 'gulp-convert-encoding';
import uglify           from 'gulp-uglify';
import watch            from 'gulp-watch';
import buffer           from 'vinyl-buffer';
import stylus           from 'gulp-stylus';
import rename           from 'gulp-rename';
import sourcemaps       from 'gulp-sourcemaps';
import liveServer       from 'live-server';

const paramsLiveServer = {
  port: 8000,
  host: '0.0.0.0',
  root: './dist/facerank/www/',
  open: false,
  ignore: 'scss,my/templates',
  file: 'index.html',
  wait: 1000,
  mount: [['/components', './node_modules']],
  logLevel: 2
};



gulp.task('jsx', () => {
  browserify({
    entries: './resources/assets/js/main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./dist/facerank/www/js'))
});

gulp.task('minify-jsx', () => {
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
  .pipe(gulp.dest('./dist/facerank/www/js'));
});


gulp.task('compilecss', () => {
  return gulp
    .src(['./resources/assets/css/_app.styl'])
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false
    }))
    .pipe(sourcemaps.write())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./dist/facerank/www/css'));
});

//  Task Server
//
gulp.task('liveserver', () => {
  liveServer.start(paramsLiveServer);
});

gulp.task('watch',['jsx', 'compilecss'], () => {
  gulp.watch(['./resources/assets/js/**/*.jsx'],['jsx']);
  gulp.watch(['./resources/assets/css/**/**/*.{styl,css}'],['compilecss']);
});

gulp.task('default', ['watch', 'liveserver']);
