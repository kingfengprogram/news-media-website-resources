module.exports = function (grunt) {
    grunt.initConfig({
        // 配置一个webpack打包任务，其实就是跟普通的配置文件一样，具体内容因项目而异
        webpack: {
            home: {
                entry: '../src/main.js',
                output: {
                    path: '../dist',
                    publicPath: './dist',
                    filename: 'dist.js'
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            loader: 'babel-loader',
                            exclude: /node_modules/
                        },
                        {
                            test: /\.(png|jpg|gif|svg)$/,
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]?[hash]'
                            }
                        }
                    ]
                },
                resolve: {
                    alias: {
                        'vue$': 'vue/dist/vue.esm.js'
                    }
                },
                devServer: {
                    historyApiFallback: true,
                    host: '0.0.0.0',
                    openPage: 'http://localhost/',
                    noInfo: true
                },
                performance: {
                    hints: false
                },
                devtool: '#eval-source-map'
            }
        },
        watch: {
            files: ['**/*.html'], // 监听项目内所有的html文件
            tasks: ['webpack:home'], //js文件变化则执行webpack任务中的home任务
            options: {
                livereload: true, //若是使用grunt的临时服务器，开启此项会自动reload页面
            }
        }
    });

    //导入监听功能模块
    grunt.loadNpmTasks('grunt-contrib-watch');
    //导入webpack功能模块
    grunt.loadNpmTasks('grunt-webpack');
};
