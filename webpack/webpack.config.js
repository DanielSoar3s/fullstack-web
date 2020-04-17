//Arquivo interpretado pelo NODEJS
const webpack = require('webpack');
const miniPluginCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new miniPluginCss({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniPluginCss.loader,
                //'style-loader',// Adcionar css a DOM  injetando a tag style
                'css-loader'
            ]
        }]
    }
}