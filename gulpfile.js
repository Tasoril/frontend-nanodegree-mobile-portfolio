var jshint = require('gulp-jshint');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var gulp = require('gulp');

// Validate CSS in css/ directory.
gulp.task('csslint', function() {
	return gulp.src(['css/*.css', 'views/css/*.css'])
		.pipe(csslint())
		.pipe(csslint.reporter());
});

// Validate JS in js/ directory.
gulp.task('jshint', function() {
	return gulp.src(['js/*.js', 'views/js/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Minify JS in js/ directory.
gulp.task('minify-js', function() {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minified/js'));
});

// Minify JS in views/js/ directory.
gulp.task('minify-views-js', function() {
	return gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/minified/js'));
});

// Minify CSS in css/ directory.
gulp.task('minify-css', function() {
	return gulp.src('css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('minified/css'));
});

// Minify CSS in views/css/ directory.
gulp.task('minify-views-css', function() {
	return gulp.src('views/css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('views/minified/css'));
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
gulp.task('compress-images-view', function() {
	return gulp.src('views/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('views/minified/images'));
});

gulp.task("default", ["csslint", "jshint", "minify-js", "minify-views-js", "minify-css", "minify-views-css", "compress-images", "compress-images-view"]);