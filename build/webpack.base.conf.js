require('babel-polyfill');
let webpack = require('webpack')
let path = require('path')
let config = require('../config')
let utils = require('./utils')
let projectRoot = path.resolve(__dirname, '../')

let env = process.env.NODE_ENV
let useCssSourceMap
let publicPath
let assetsRoot

switch(env) {
	case 'development':
		publicPath = config.dev.assetsPublicPath
		useCssSourceMap = config.dev.cssSourceMap
		assetsRoot = config.build.assetsRoot
		break;
	case 'production':
		publicPath = config.build.assetsPublicPath
		useCssSourceMap = config.build.cssSourceMap
		assetsRoot = config.build.assetsRoot
		break;
	default:
		publicPath = config.test.assetsPublicPath
		useCssSourceMap = config.test.cssSourceMap
		assetsRoot = config.test.assetsRoot
}

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    output: {
        path: assetsRoot,
        publicPath: publicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.less', '.css', '.scss'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
	        'jquery': 'jquery'
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: useCssSourceMap
        }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 10 versions']
            })
        ]
    },
	plugins: [
		/*new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})*/
	]
}