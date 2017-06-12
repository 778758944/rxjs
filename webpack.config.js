/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-12 16:26:26
 * @version $Id$
 */
var path = require('path');

module.exports = {
	devtool:'eval-source-map',
	entry:'./observable.js',
	output:{
		path:path.join(__dirname,'build'),
		filename:'demo.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				query:{
					presets:['es2015']
				}
			}
		]
	}
}
