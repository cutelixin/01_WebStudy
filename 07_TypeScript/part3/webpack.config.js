// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中的所有配置信息都应该写在 module.exports 中
module.exports = {
    // 指定入口文件
    entry:'./src/index.ts',

    // 指定打包文件所在的目录
    output:{
        // 指定打包文件的目录
        path:path.resolve(__dirname , 'dist'),
        // 指定打包文件的名字
        filename:'bundle.js',
        // 告诉webpack不要使用箭头函数
        environment:{
            arrowFunction:false
        }
    },

    // 指定webpack打包时要使用的模块
    module:{
        // 指定加载规则
        rules:[
            {
                // test 指定规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use:[
                    // 配置babel
                    {
                        // 指定加载器
                        loader:'babel-loader',
                        options:{
                            // 设置预定义环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // targets 需要兼容到的浏览器
                                        targets:{
                                            "chrome":'58',
                                            "ie":'11'
                                        },
                                        "corejs":'3',
                                        // 使用corejs的方式 "usage" 表示按需加载
                                        "useBuiltIns":'usage'
                                    }
                                ]
                            ]
                        }
                    }
                ,
                'ts-loader'],
                // 要排除的文件
                exclude:/node-modules/
            }
        ]
    },

    // 配置webpack插件

    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'自定义title',
            template:'./src/index.html'
        })
    ],

    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}