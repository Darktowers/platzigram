var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');// convertir de browserify a gulp para continuar procesando
var watchify = require('watchify');
gulp.task('styles', function(){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
});

gulp.task('assets',function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));
})

function compile(watch) {
    var bundle = watchify(browserify('./src/index.js'))//transformar a browserify
    function rebundle() {
        bundle
        .transform(babel)//permite usar ecmascript6
        .bundle()//Genera el archivo js
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(source('index.js'))//procesar de browserify a gulp para continuar manejado el archivo
        .pipe(rename('app.js'))// se usa gulp-rename para cambiar el nombre base
        .pipe(gulp.dest('public'));//se asigna un destino al archivo final
    }
    if (watch) {
        bundle.on('update', function(){
            console.log('---> Building...');
            rebundle();
        })
    }
   rebundle(); 
}


gulp.task('build',function() {
    return compile();
});
gulp.task('watch',function(){
    return compile(true);
});
gulp.task('default', ['styles','assets','build']);