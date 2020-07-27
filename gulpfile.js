var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("css",function() {
	return gulp.src("assets/scss/global.scss")
	.pipe(sass())
	.pipe(gulp.dest("static/css"))
});

gulp.task("watch",function(){
	gulp.watch("assets/scss/*.scss", gulp.series ("css"));
})
