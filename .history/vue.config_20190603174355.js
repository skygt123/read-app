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
