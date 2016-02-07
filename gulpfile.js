var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function(){
	return gulp.src('web/**/*', {read:false}).pipe(clean())
});

gulp.task('copy', function() {
	return gulp.src('src/**/*').pipe(gulp.dest('web'));
});

gulp.task('default', ['clean','copy']);