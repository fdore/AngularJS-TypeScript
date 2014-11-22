    (function (require) {

        var gulp        = require('gulp'),
            ts          = require('gulp-typescript'),
            eventStream = require('event-stream'),
            clean       = require('gulp-clean'),
            htmlReplace = require('gulp-html-replace'),
            webserver   = require('gulp-webserver'),
            karma       = require('karma').server,
            tsProject   = ts.createProject({
                declarationFiles: true,
                noExternalResolve: true,
                module: 'amd'
            });



        gulp.task('ts', function() {
            var tsResult =  gulp.src('src/**/*.ts')
                                .pipe(ts(tsProject));

            return eventStream.merge(
                tsResult.js.pipe(gulp.dest('build/js'))
            );
        });


        gulp.task('test', function (done) {
            karma.start({
                configFile: __dirname + '/karma.conf.js',
                singleRun: false
            }, done);
        });

        gulp.task('html', function () {
            return  gulp.src('./src/*.html')
                        .pipe(htmlReplace({
                            'js': {
                                src: [['js/main.js', 'vendor/requirejs/require.js']],
                                tpl: '<script data-main="%s" src="%s"></script>'
                            }
                        }))
                        .pipe(gulp.dest('./build/'));
        });

        gulp.task('js', function () {
            return  gulp.src('./vendor/**/*')
                        .pipe(gulp.dest('./build/vendor/'));
        });

        gulp.task('webserver', function() {
            gulp.src('build')
                .pipe(webserver({
                    livereload: true,
                    directoryListing: true,
                    open: true,
                    port: 8080
                }));
        });


        gulp.task('watch', ['ts', 'js', 'html', 'test'], function() {
            gulp.watch('src/**/*.ts', ['ts', 'js', 'html', 'test']);
        });



    }(require));
