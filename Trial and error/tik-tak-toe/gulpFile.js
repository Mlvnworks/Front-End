// initialize variables
const { src, dest, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// files path
const files = {
    htmlPath: {
        mainHtml: 'src/*.html',
        pageHtml: 'src/pages/*.html',
    },
    sassPath: 'src/style/*.scss',
    jsPath: 'src/js/*.js',
};

// copy html files
const copyMainHtml = () => src(files.htmlPath.mainHtml).pipe(dest('dist'));
const copyPages = () => src(files.htmlPath.pageHtml).pipe(dest('dist/pages'));

// compile sass to css and minify css
const compileSass = () => {
    return src(files.sassPath)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleancss())
        .pipe(dest('dist/style'));
};

// minify javaScript
const minifyJs = () => src(files.jsPath).pipe(uglify()).pipe(dest('dist/js'));

// watch task
const watchTask = () => {
    watch(files.htmlPath.mainHtml, copyMainHtml);
    watch(files.htmlPath.pageHtml, copyPages);
    watch(files.sassPath, compileSass);
    watch(files.jsPath, minifyJs);
};

// gulp deafualt task
exports.default = series(
    copyMainHtml,
    copyPages,
    compileSass,
    minifyJs,
    watchTask
);
