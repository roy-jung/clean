const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const resolve = dir => path.join(__dirname, dir);

const webpackDevServerConfig = {
    entry: {
        app: './src/main.js',
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
            },
        ],
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        host: 'localhost',
        port: 8080,
        open: false,
        overlay: {
            warning: false,
            errors: true,
        },
        publicPath: '/',
        quiet: true,
        watchOptions: {
            poll: false,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = webpackDevServerConfig.devServer.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            process.env.PORT = port;
            webpackDevServerConfig.devServer.port = port;
            webpackDevServerConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            `your application is running @ http://${webpackDevServerConfig.devServer.host}:${port}`,
                        ],
                    },
                    onErrors: () => console.log('error'),
                })
            );
            resolve(webpackDevServerConfig);
        }
    });
});
