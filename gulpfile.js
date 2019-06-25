const { src, dest, series, parallel, watch, task } = require('gulp');
const concat = require('gulp-concat');
const uglifyES = require('gulp-uglify-es').default;
const templateCache = require('gulp-angular-templatecache');
const exec = require('child_process').exec;

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const nodeModules = [
	'node_modules/lodash/lodash.min.js',
	'node_modules/angular/angular.min.js',
	'node_modules/angular-simple-logger/dist/angular-simple-logger.min.js',
	'node_modules/angular-ui-router/release/angular-ui-router.min.js',
	'node_modules/angular-google-maps/dist/angular-google-maps.min.js'
];

function bundleJS(done) {
	src([...nodeModules, 'app/app.js', 'dist/templates.js', 'app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(dest('dist/'))

	done();
}

function uglifyJS(done) {
	src('dist/app.js')
		.pipe(uglifyES())
		.pipe(dest('dist/'));
	
	done();
}

function cacheTemplates() {
	return src('app/**/*.html')
		.pipe(templateCache({ module: 'passengr' }))
		.pipe(dest('dist/'));

}

function buildSass(done) {
	src('app/**/*.scss')
		.pipe(sass())
		.pipe(dest('dist/'));

	done();
}

function watchAll(done) {
	watch(['app/**/*.js', 'app/**/*.html'], series(cacheTemplates, bundleJS));
	watch('app/**/*.scss', series(buildSass));
	done();
}

function serve() {
	exec('npx reload');
}

task('build', parallel(series(cacheTemplates, bundleJS), buildSass));
task('watch', series('build', parallel(watchAll, serve)));

exports.bundleJS = bundleJS;
exports.uglifyJS = uglifyJS;
exports.cacheTemplates = cacheTemplates;
exports.buildSass = buildSass;
// exports.build = parallel(series(cacheTemplates, bundleJS), buildSass);
// exports.watch = series('build', parallel(watchAll, serve));
