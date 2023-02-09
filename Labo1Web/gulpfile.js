const { series } = require('gulp')

const {src,dest ,watch, serie} = requiere('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles()
{
    return src('mysass.sass').pipe(sass()).pipe(dest('css'))
}

function watchTask()
{
    watch(['mysass.sass'],buildStyles)
}
exports.default = series(buildStyles,watchTask)