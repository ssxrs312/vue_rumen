// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {                        // 1. 对于所有以"/api"开头的url 做处理．（虚拟主机上叫做/api）
                target: 'http://siwei.me',  // 3. 转发到 siwei.me 上．  目标主机
                changeOrigin: true,        // 改变原有的虚拟主机
                ws: true,                 // 代理websockets
                pathRewrite: {           // 重写
                    '^/api': ''         // 2. 把url中的"/api"去掉．
                }
            }
        }
    }
}