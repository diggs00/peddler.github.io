// Include gulp
var gulp = require('gulp');

// Include Plugins
var express = require('express');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var server;
var html;


gulp.task('server' , function() {
    server = new express();
    server.use(express.static('../'));
    server.listen(6000);
    browserSync({proxy: 'localhost:6000'});
})


function reload() {
    if(server) {
        return browserSync.reload({stream: true});
    }
    return gutil.noop();
}


// Watch TASK
gulp.task('watch', function() {
    gulp.watch('../sass/*scss', ['sass'])  // Watch all the .less files, then run the less task
    gulp.watch('../**/*.html', ['html']);  // Watch all the .html files, then run the RELOAD HTML task
});


// Compile LESS TASK
gulp.task('sass', function () {
    return sass('../sass/main.scss') //path to your main less files
    .pipe(minifyCSS())
    .pipe(gulp.dest('../css')) // css output folder
    .pipe(reload())
    .pipe(notify({ message: 'SASS task complete' }));

});

// RELOAD HTML TASK
gulp.task('html' , function() {
    gulp.src('../**/*.html')
    .pipe(reload());
})



gulp.task('default', ['server', 'watch', 'sass', 'html']); // Default will run the 'entry' watch task
