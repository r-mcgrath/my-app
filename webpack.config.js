const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { env } = require('process');


module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./index.html"),
        }),
    ],
    entry:'./index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        
    },
    devServer: {
        static: {
          directory: "/",
          publicPath: "http:localhost:3000"
        },
        
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: 'defaults' }],
                        ['@babel/preset-react', { targets: 'defaults' }]
                    ]
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }
    ]}
};
