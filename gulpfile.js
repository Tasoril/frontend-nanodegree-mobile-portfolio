var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gulp = require('gulp');

// Validate CSS in css/ directory.
gulp.task('csslint', function() {
	return gulp.src('css/*.css')
		.pipe(csslint())
		.pipe(csslint.reporter());
});

// Validate JS in js/ directory.
gulp.task('jshint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Minify JS in js/ directory.
gulp.task('minify-js', function() {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minified/js'));
});

// Minify CSS in css/ directory.
gulp.task('minify-css', function() {
	return gulp.src('css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('minified/css'));
});

// Optimize images in img/ directory.
gulp.task('compress-images', function() {
	return gulp.src('img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('minified/img'));
});

// Optimize images in views/images/ directory.
// Note that this is a seperate task as I wanted to specify a different destination.
gulp.task('compress-images-view', function() {
	return gulp.src('views/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('minified/views/images'));
});

gulp.task("default", ["csslint", "jshint", "minify-js", "minify-css", "compress-images", "compress-images-view"]);