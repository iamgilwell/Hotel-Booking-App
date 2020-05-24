// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader', // post process the compiled CSS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    }
};