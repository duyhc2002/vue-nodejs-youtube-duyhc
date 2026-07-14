module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // Đảm bảo các file static (js, css) được nạp đúng từ thư mục gốc
  publicPath: '/',

  // Tắt source map khi build production để giảm dung lượng
  productionSourceMap: false,

  configureWebpack: {
    performance: {
      maxAssetSize: 1024 * 1024 * 2,
      maxEntrypointSize: 1024 * 1024 * 2
    }
  }
}
