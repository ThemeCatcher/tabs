var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('tc.tabs.js')
               .pipe(rename({suffix: '.min'}))
               .pipe(uglify({preserveComments: 'some'}))
               .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch('tc.tabs.js', ['default']);
});