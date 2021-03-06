process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader');
  },
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    open: true,
    port: 8001,
    overlay: {
      errors: false,
      warnings: false,
    },
  },
};
