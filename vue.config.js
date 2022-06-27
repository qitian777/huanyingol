const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
//   devServer: {
//         proxy: {
//             '/': {
//                 //是否支持websocket
//                 ws: false,
//                 //目标地址
//                 target: 'http://localhost:8082',
//                 //发送请求头中host会设置成target
//                 changeOrigin: true,
//                 //不重写请求地址
//                 pathRewrite: {
//                     '^/': '/'
//                 }
//             }
//         }
//     }
})
