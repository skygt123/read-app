var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://api.zhuishushenqi.com',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '/api': '' // 通过pathRewrite重写地址，将前缀/api转为/
          },
          '/content': {
            target: 'http://chapterup.zhuishushenqi.com',
            changeOrigin: true,
            pathRewrite: {
              '^/content': 'http://chapterup.zhuishushenqi.com'
            }
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
