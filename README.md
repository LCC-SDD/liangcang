package  安装的插件
package-lock  安装插件的地址
postcssrc  给插件预留位置
babelrc  运行的环境  浏览器版本
打包文件:
    npm run build  
    可以先本地服务器上测试    npm i http-server -g

package:
    dependencies: 生产依赖
    devDependencies: 开发依赖
    engines:引擎 安装环境的依赖  版本
    browserslist:运行的环境  浏览器版本

#自己了解tcp

#考虑一个项目
 - axios http请求 和 http 拦截器

 - sass或less css预处理器

 - vuex 数据状态管理

 - 考虑项目是做什么的  移动端  flexible rem布局

 - pc端 element-ui

 - 各种跟你项目有关的插件  业务逻辑

#首页弹窗
 - http请求
 - 进入首页  分情况
    - 第一次进入显示 再次进入不显示
    - 每次进入页面都显示
    - 用户领取后不显示

#
