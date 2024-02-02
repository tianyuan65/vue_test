const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave:false,  //关闭语法检查
  // 开启器代理服务器(方式一)，这个端口号要与真的服务器的端口号保持一致
  // 这种开启代理服务器的方式有个缺点，就是只能服务于一个服务器，无法服务于多个服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 开启代理服务器(方式二)，可指定多个代理
  devServer: {
    proxy: {
      // /api是请求前缀，只要请求前缀是/api
      '/api': {
        // 就向目标URL/路径(按照我写的例子，就是5000那台服务器)发送请求
        target: 'http://localhost:5000',
        // 正则的匹配条件，匹配所有以/api开头的路径，然后将/api开头的路径都给变成空字符串
        pathRewrite:{'^/api':''},
        // ws: true,  //用于支持websocket
        // changeOrigin: true  //用于控制请求头中的host值
      },
      // /api是请求前缀，只要请求前缀是/api
      '/demo': {
        // 就向目标URL/路径(按照我写的例子，就是5000那台服务器)发送请求
        target: 'http://localhost:5001',
        // 正则的匹配条件，匹配所有以/api开头的路径，然后将/api开头的路径都给变成空字符串
        pathRewrite:{'^/demo':''},
        // ws: true,  //用于支持websocket
        // changeOrigin: true  //用于控制请求头中的host值
      },
    }
  }
})