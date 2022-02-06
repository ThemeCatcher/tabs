const { dest, series, src, watch} = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function build(cb) {
    src('tc.tabs.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({
            output: {
                comments: /^!/
            }
        }))
        .pipe(dest('.'));

    cb();
}

function watcher(cb) {
    watch('tc.tabs.js', build);
    cb();
}

exports.default = build;
exports.watch = series(build, watcher);
