import gulp from 'gulp';
import gulpif from 'gulp-if';
import { log, colors } from 'gulp-util';
import named from 'vinyl-named';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import livereload from 'gulp-livereload';
import args from './lib/args';
import { AngularCompilerPlugin } from '@ngtools/webpack';

const ENV = args.production ? 'production' : 'development';

gulp.task('scripts', (cb) => {
  return gulp.src(['src/app/*.js', 'src/app/*.ts'])
    .pipe(plumber({
      // Webpack will log the errors
      errorHandler () {}
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      devtool: args.sourcemaps ? 'inline-source-map' : false,
      watch: args.watch,
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(ENV),
          'process.env.VENDOR': JSON.stringify(args.vendor)
        }),
        new AngularCompilerPlugin({
          tsConfigPath: 'tsconfig.json',
          entryModule: 'src/app/app.module#AppModule',
          sourceMap: true
        })
      ].concat(args.production ? [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
      ] : []),
      module: {
        // rules: [
        //   {
        //     test: /\.ts$/,
        //     loader: 'ts-loader',
        //     exclude: /node_modules/
        //   }
        // ]
        rules: [
          {
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
          }
        ]
      },
      resolve: {
        extensions: ['.ts', '.js'],
        modules: [
          'node_modules/',
          'app/scripts/'
        ]
      }
    },
    webpack,
    (err, stats) => {
      if (err) return;
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false,
        colors: true,
        cached: false,
        children: false
      }))
    }))
    .pipe(gulp.dest(`dist/${args.vendor}/scripts`))
    .pipe(gulpif(args.watch, livereload()))
});
