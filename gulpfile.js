(function (require) {

    var gulp        = require('gulp'),
        ts          = require('gulp-typescript'),
        eventStream = require('event-stream'),
        clean       = require('gulp-clean'),
        htmlReplace = require('gulp-html-replace');

    var tsProject = ts.createProject({
        declarationFiles: true,
        noExternalResolve: true,
        module: 'amd'
    });



    gulp.task('ts', function() {
        var tsResult =  gulp.src('src/**/*.ts')
                            .pipe(ts(tsProject));

        return eventStream.merge(
            tsResult.dts.pipe(gulp.dest('dist/definitions')),
            tsResult.js.pipe(gulp.dest('dist/js'))
        );
    });

    gulp.task('html', function () {
        return  gulp.src('./*.html')
                    .pipe(htmlReplace({
                        'js': {
                            src: [['js/main.js', 'vendor/requirejs/require.js']],
                            tpl: '<script data-main="%s" src="%s"></script>'
                        }
                    }))
                    .pipe(gulp.dest('./dist/'));
    });

    gulp.task('js', function () {
        return  gulp.src('./vendor/**/*')
            .pipe(gulp.dest('./dist/vendor/'));
    });

    gulp.task('watch', ['ts', 'js', 'html'], function() {
        gulp.watch('src/**/*.ts', ['ts', 'html', 'js']);
    });



}(require));
