const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const config = {
  entry: './src/index.js',
  mode:'development',
  output: {
    // path.join() 去拼接路径
    // __dirname 当前文件的绝对路径
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // sass-loader node-sass两个依赖都需要安装
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.(png|jpg|gif|svg)$/i,
          use:[
              {
                loader:'url-loader',
                options:{
                    limit:5000,
                    name: 'images/[name]-[hash:4].[ext]'
                }
              }
          ]
      },
      {
          test: /\.(html)$/,
          use: [ {
              loader: 'html-loader'
          }],
      },
      {
          test:/\.(otf|ttf|eot|woff|woff2)$/,
          use:[{
              loader: 'file-loader',
              options: {
                  name: 'font/[name].[ext]'
              }
          } ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
      template: 'index.html'
  })]
}

module.exports = config