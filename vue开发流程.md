## VUE 开发流程

#### 搭建环境

- 安装 nrm 管理 npm

> 1、npm install nrm -g  先安装这个，镜像问题
>
> 2、nrm test 检测当前镜像的网速
>
> 3、nrm use taobao 切换镜像

- 流程

> 1、npm init 初始化环境 => npm init --yes
>
> 2、npm install webpack -g  全局安装webpack(如果已安装可直接略过此条)
>
> 3、webpack -v 检测是否安装成功
>
> 
>
> 4、npm install webpack --save-dev （--save 发布模式 +-dev 开发模式）  根目录安装(在操作文件的根目录里面安装)
>
> 5、把对应的文件放入到根目录下面（或者直接在根目录进行 创建 开发）
>
> 
>
> 6、添加配置文件( 进出口（entry、output）、加载器（babel-loader） )
>
> - [ ] webpack.config.js   =>   这是配置一个文件的情况  
>
> - [x] webpack.develop.config.js(开发配置文件)  webpack.publish.config.js(发布配置文件)    =>多个配置文件
>
> - [x] webpack 开发时候的配置文件
>
>       ```javaScript
>       var path = require('path')
>       module.exports = {
>         	// webpack 中的三大亮点之一，入口出口设置
>         	entry : path.resolve(__dirname , ' ./src/app.js (文件路径) '),
>         	output : {
>             	path : path.resolve(__dirname, ' dist ( 出口文件名 ) '),
>             	filename : ' bundle.js '
>         	}
>       }
>       ```

> - [x] 配置 babel-loader 文件
>
>       -  npm install --save-dev babel-loader babel-core babel-preset-env webpack  安装babel-loader 
>       -  可以通过搜素 babel-loader 进入gitHub上查看安装文档，以及下面的配置信息
>       -  配置信息可以通过安装后在 node_modules 里面进行查看 babel-loader -> README.md
>
>       ```javaScript
>       // 配置到 module.exports 里面  将 ES6 转成 ES5
>       module : {
>         rules : [
>           {
>             test: /\.js$/,
>             exclude: /(node_modules|bower_components)/,
>             use: {
>               loader: 'babel-loader',
>               options: {
>                 presets: ['env']
>               }
>             }
>           }
>         ]
>       }
>       ```

> - [x] webpack --config webpack.develop.config.js （可直接运行指定的文件）   =>   也可以在 package.json 中配置   dev ： "webpack --config webpack.develop.config.js"  （配置后可以直接运行  ==>>  npm run dev ）



####  划分模块 = > 开发

> - 模块初始化
>   - 以下是安装 vue-loader 解析 vue 时候的文件需求
>
> => 先安装vue 模块 导入文件  npm install vue --save  不加-dev 是因为我们线上的时候也要用
>
> ```
> //这个跟script一个意思 导入 vue 文件，Vue 可以说是变量，跟下面的new Vue 关联
> import Vue from 'vue'
>
> // 把 .vue 文件导入，（App就相当于一个容器，接收 vue 里面的内容），在通过 render 渲染到页面 #app 坑中
> import App from './xx.vue'  
>
> // 关联入口 js 与 模块之间的建立关系
> new Vue({
>   el : '#app', // 这里关联 HTML 文件
>   // 这里把 .vue 里面的内容渲染到页面上
>   // render : function(create){
>   //   create(App)
>   // }
>   render: create=>create(App)   // 这里只能写箭头函数
> })
> ```
>
> => 再安装 vue-loader   npm install vue-loader --save-dev  针对 vue 的加载器
>
> ```
> // 特殊模板，需要自己配置文件
> {
>   test : /\.vue$/,
>   use : {
>     loader : 'vue-loader',
>   }
> }
> ```
>
> => npm install vue-template-compiler --save-dev 根据上面提示，缺少此模板，所以安装此 编译器 解析模板
>
> => npm install css-loader --save-dev  安装解析 css 的加载器
>
> ```
> {
>   test: /\.css$/,
>   use: [ 'style-loader', 'css-loader' ]
> }
> ```
>
> ---
>
> - 以下是安装解析内容需要的模块
>
> => 图片解析 | npm install url-loader --save-dev
>
> ```
> {
>   test: /\.(png|jpg|gif)$/,
>   use: [
>     {
>       loader: 'url-loader'
>       options: {
>         limit: 8192
>       }  
>     }
>   ]
> }
> ------------一般用下面这种方式------------
> {
>   test: /\.(png|jpg|jpeg|gif)$/,
>   // limit=25000 当大于这个数值时，图片单独请求，名称不变，否则相反（）
>   use: 'url-loader?limit=25000&name=images/[name].[ext]'
> }
> ```
>
> => 文件夹解析 | npm install file-loader --save-dev  不需要配置文件



- 以下是 webpack 开发里面：插件的使用（自动刷新，自动生成 HTML）

> - 自动刷新插件，内容先保存在内存中
>
>   - npm install webpack-dev-server --save-dev   发布目录启动服务
>   - 配置快捷指令 "server" : "webpack-dev-server --config webpack.develop.config.js --content-base src"
>
>   ```
>   var webpack = require('webpack') // 下面用到的插件，就需要定义变量
>
>   devtool:'eval',
>   devServer:{
>       contentBase:path.resolve(__dirname, './src'), // 当前服务器监听的路径
>       hot:true, // 热更新
>       port:7777, // 定义端口号
>       host:'localhost',
>       open:true, // 是否自动打开浏览器
>       openPage:""
>   },
>   plugins:[
>       new webpack.HotModuleReplacementPlugin(),
>   ]
>   ```
>
> - 自动生成 HTML 文件 的插件（下面的发布生成html跟这个一样）
>
>   - npm install html-webpack-plugin --save-dev   安装
>
>   ```
>   const htmlWebpackPlugin = require('html-webpack-plugin')
>
>   // 能够自动生成 html 的插件
>   new htmlWebpackPlugin({
>     template: 'components/index.html'
>   })
>   ```



#### 插件的使用（发布 -> 部署的插件）

- 发布 => 需要配置文件 （快捷键）

> "publish": "webpack --config webpack.publish.config.js"

- 压缩插件 webpack 里面的第三个亮点：

  - 下面这个是 webpack 自带的一个压缩插件，一般我们不使用，知道就行

  $$
  var webpack = require('webpack')

  new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
          screw_ie8: true,
          keep_fnames: true
      },
      compress: {
          warnings: false,
          screw_ie8: true
      },
      comments: false
  }),
  $$

  - 我们用 -p 的命令模式方法来进行压缩

  ```
  "publish": "webpack --config webpack.publish.config.js -p"  // 运行后自动压缩文件
  ```

- 分离第三方插件

  - 抽取第三方插件，webpack 自带的

  ```
  var webpack = require('webpack')

  entry: {
    app: path.resolve(__dirname,'./src/.main.js'), // 路径
    vendors:['vue']  // 分离谁就写谁
  }

  // 抽取第三方的插件代码  name => 对应上面的分离的属性名, filename => 对应分离后生成的文件名
  new webpack.optimize.CommonsChunkPlugin({name: 'vendors',filename: 'vendors.js'})

  // 以上代码把之前的 bundle.js 进行了分离，只要包含了第三方信息的都被抽离掉了
  ```

  - 第三方插件 自动生成 html 文件  =》 指定文件名来进行分离加载
  - npm install html-webpack-plugin --save-dev  安装

  ```
  var HtmlWebpackPlugin = require('html-webpack-plugin')

  // 这里是添加入口和出口的 如果之前有添加可以略过此条
  var webpackConfig = {
    entry: 'index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'index_bundle.js'
    }
    plugins: [new HtmlWebpackPlugin()]
  }

  // 一些属性的信息
  new HtmlWebpackPlugin({
    title: 'My App', // 生成后对应文件的 title 信息   代码执行后没有反应
    filename: 'index.html', // 生成后的名称
    template: 'src/assets/test.html'  // 以这个路径下的 html 为模板，来生成对应 html
  })
  ```




- npm install extract-text-webpack-plugin --save-dev  抽取css 样式



- eslint-loader 代码语法规则及检查
  - rules 自定义的代码


> 注：
>
> - 通过运行文件 （npm run dev）发现缺少什么就安装什么
>   - 有时候下载可能会漏掉某些文件，需要注意
> - 一般只要有 loader 字样的，就需要注意配置信息，去对应文件找对应信息。
> - 特殊几个模板需要 单独配置或者不需要配置
>   - vue-loader 需要单独配置
>   - file-loader 文件加载器，这个不需要配置，他是在 url-loader 里面的



- 路由解析器

```
// 安装 vue-router
npm install vue-router --save
```

- 其他加载器

```
// 字体加载器也是 url-loader
{
    test: /\.(woff|svg|eot|ttf)\??.*$/,
    use: 'url-loader'
}
```