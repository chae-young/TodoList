const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:'development', //배포: production
    devtool:'eval',
    resolve:{
        extensions:['.jsx','.js']
    },
    entry:{
        app:'./client',
    },
    module:{
        rules:[
            {
                test:/\.jsx?/,
                loader:'babel-loader',
                options:{
                    presets:[
                    ["@babel/preset-env",{
                        targets:{
                            browsers:['> 5% in KR','last 2 chrome versions'],
                        }
                    }],
                    "@babel/preset-react"
                    ],
                    plugins:['@babel/plugin-proposal-class-properties'],
                },
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                test: /\.css$/i,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"} 
                ],
            }        
        ],
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true}),
        require('autoprefixer')
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js',
        //publicPath: "/react_pr/todoList/",
    },
}