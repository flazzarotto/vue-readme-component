// vue.config.js
module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    }
}