module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-pomelo-bakery/' // test20200915 為 repo 名稱
    : '/'
}