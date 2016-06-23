'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    browserSync = require('browser-sync'),
    superstatic = require( 'superstatic' ),
    karmaServer = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new karmaServer({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('serve',['test'], function() {
  browserSync({
    port: 3001,
    files: ['index.html', '**/*.js'],
    injectChanges: true,
    logFileChanges: false,
    logLevel: 'silent',
    logPrefix: 'angularin20typescript',
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: './',
      middleware: superstatic({ debug: false})
    }
  });
});

gulp.task('default');