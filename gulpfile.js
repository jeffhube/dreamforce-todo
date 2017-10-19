const gulp = require('gulp')
const shell = require('gulp-shell')
const watch = require('gulp-watch')
const nightwatch = require('gulp-nightwatch')

gulp.task('push', shell.task('sfdx force:source:push'))

gulp.task('test', function() {
    return gulp.src('').pipe(nightwatch())
})

gulp.task('watch', function() {
    return watch('force-app/main/default/**/*', function() {
        gulp.start('push')
    })
})
