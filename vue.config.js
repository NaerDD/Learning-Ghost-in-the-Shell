module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
  },
},
//关掉默认的语法检查
  lintOnSave: false,
  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        // 将所有带/atguigu的修改为空串
        pathRewrite:{'^/atguigu':''},
        // 用于支持websocket
        ws: true,
        // 默认为true 用于控制请求头的host值
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 将所有带/atguigu的修改为空串
        pathRewrite:{'^/demo':''},
        // 用于支持websocket
        ws: true,
        // 默认为true 用于控制请求头的host值
        changeOrigin: true
      },
    }
  }

}