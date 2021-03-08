module.exports = ['development', 'production'].map(mode => ({
	mode,
	entry: './lib/index.js',
	output: {
		filename: mode === 'production' ? 'index.min.js' : 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: false
}));
