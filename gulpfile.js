// Include gulp & set paths
var gulp 			= require('gulp'),
	templateName	= 'foldr',
	gulpPath		= ".foldr/";
	//devpath			= gulpPath,
	//buildpath		= gulpPath;


// Include Our Plugins
var sass 			= require('gulp-sass'),
	csslint 		= require('gulp-csslint'),
	minifyCSS 		= require('gulp-minify-css'),
	autoprefixer 	= require('gulp-autoprefixer'),
	jshint 			= require('gulp-jshint'),
	concat 			= require('gulp-concat'),
	uglify 			= require('gulp-uglify'),
	minify 			= require('gulp-minify'),
	watch 			= require('gulp-watch');




/******************************

   __|   __|   __|
  (    \__ \ \__ \
 \___| ____/ ____/

1.Compile SASS files
2.Build Fonts
******************************/

gulp.task('sass', function() {
	return gulp.src([ gulpPath + 'sass/style.scss'])
		.pipe(sass()).pipe(sass({
			errLogToConsole: true,
			//sourceComments : 'normal'
			outputStyle: 'compact'
		}))
		.pipe(autoprefixer({
			browsers: ['> 1%', 'Firefox > 20', 'IE 8'],
			cascade: false
		}))
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(gulp.dest( gulpPath ));
});

/******************************

     |   __|
  \  | \__ \
 \__/  ____/

1.Lint JS files
2.Concatenate & Minify Scripts.js
3.Build Libs
******************************/

gulp.task('js-lint', function() {
	return gulp.src( gulpPath + 'js/*.js' )
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('js-minify', function() {
	return gulp.src([ gulpPath + 'js/scripts.js' ] )
		//.pipe(concat('scripts.min.js'))
		.pipe(minify({
			ext:{
				//src:'.min.js',
				min:'.min.js'
			},
			//exclude: ['tasks'],
			//ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest( gulpPath + 'js/' ));
});


/******************************

  _ )  |  | _ _|  |     _ \    __| 
  _ \  |  |   |   |     |  | \__ \ 
 ___/ \__/  ___| ____| ___/  ____/ 

1.Watch Files For Changes
2.Build All
******************************/                    

gulp.task('watch', function() {
	gulp.watch( 'js/**/*.js', ['js-lint', 'js-minify']);
	gulp.watch( '**/*.html', ['fileinclude']);
	gulp.watch( gulpPath + 'sass/*.scss', ['sass']);
	//gulp.watch('dev/images/*', ['imagemin']);
});

// HTML Preview Build
gulp.task('default', [ 'js-lint', 'js-minify', 'sass', 'watch']);