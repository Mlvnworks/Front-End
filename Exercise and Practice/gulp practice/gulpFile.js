const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const terser = require('gulp-terser');

// CopyHtml
function copyHtml() {
    return src('src/*.html').pipe(dest('dist'));
}
// compile and minify scss
function compileSass() {
    return src('src/style/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(dest('dist/style'));
}

// minify js
function minifyJs() {
    return src('src/js/*.js').pipe(terser()).pipe(dest('dist/js'));
}

// create watch
function watchTask() {
    watch('src/*.html', copyHtml);
    watch('src/style/*.scss', compileSass);
    watch('src/js/*.js', minifyJs);
}

// deafault gulp
exports.default = series(copyHtml, compileSass, minifyJs, watchTask);
