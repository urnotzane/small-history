# small-history

> 一个关于新闻阅读的vue项目，后端是node，数据源是[zaker](http://app.myzaker.com/)。
这个项目目的是学习vue与node（倒不如说是在爬坑啊）。

## 开始

### 前端——选择vue框架及webpack打包工具

1. 安装相关环境与工具
首先要安装 Node.js， Node.js 自带了软件包管理器 npm，不过npm比较慢，我是用了淘宝的cnpm镜像，
然后用淘宝的cnpm 安装webpack：

```bash
# 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装webpack，这是全局安装
$ cnpm install webpack -g

# 安装vue-cli并创建项目
$ cnpm install -g vue-cli

$ vue init webpack samll-history

$ cd samll-history

$ cnpm install

# 运行vue项目
$ cnpm run dev
```
2. 创建组件、配置路由

3. 期间调试了很多次爬过很多坑，具体问题都在[我的csdn博客](https://blog.csdn.net/urnotzane/article/details/79443941)上有写，这里就不再次记录了。

### 后端——选择了node
> 既然vue的编写运行环境需要node，不妨试一下node搞后端数据，还能学习一下。

1. node抓取网页数据很容易

* 本来想以今日头条做数据源，但是今日头条很小气，他做了限制抓取数据的措施，这就头疼了，一开始的前端模板都是按照今日头条做的，没办法选择了[zaker](http://app.myzaker.com/)，这个网页的数据很容易获取，只是他们大多数都是动态渲染，比如图片地址就是放在dataset的数据里，没办法只能写一个函数来获取，还好很容易。

2. 前端与后端交互

* 数据源已经搞定，接下来是将前端与后端数据结合，前端vue使用[Axios](https://www.npmjs.com/package/axios)工具，**Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。**

3. 后端总结

* **在这次node与axios的交互中，我的理解是：**node将数据发送到服务器（res.sed()），而且打开端口地址还能直接看到数据json，然后axios去get这个端口地址获取数据。很有意思，这是我以前从来未理解的事，这个项目让我还能多了解一下前端后端的交互详情。

### 项目的打包与调试

> vue打包后出现各种问题，会空白页找不到文件，错误的文件路径，都需要重新配置**webpack.config.js**，还好最后都找到了解决办法（Google——万能的Google~）。

### 上线

> 前段时间买了个[namesilo](https://www.namesilo.com/)域名和[野草云](http://www.yecaoyun.com/)的虚拟主机，很便宜~却没想到虚拟主机只支持PHP，并不支持node，很惨，我用了俩星期做这个结果却没法上线T~T。

> 思来想去不如我再写个PHP抓数据吧:)

## 结束

### 这是一个用记事本随手写的项目编写记录

* 文章内容的图片是动态地址，无法通过提取html代码直接显示在页面，所以我们可以通过他们的共同点写一个获取dataset数据的方法！

* dataset 属性本身可以被读取，但不能直接写入。相反，所有的写入必须是它的“属性”，这反过来表示数据属性。

* 还要注意，一个HTML data-attribute 及其对应的DOM dataset.property 

* axios获取数据或者node爬数据的时间有些长，因此有些获取数据的函数加上了定时器，等待数据加载完毕进行修改相关内容。

* **搜索框：**
v-model双向绑定input数据，watch数据变化并执行相应搜索功能

由于搜索数据时需要获取文章列表数据，将搜索框放入文章列表里，去掉top组件

* 可以适当添加一个返回顶部的按钮

* 此应用无法加载视频

* 如果router使用了history模式打包后出现空白页

* 打包后无法获取访问后端数据，找办法配置一下

* 哈哈哈已经配置完了 

* history模式可以解决url的#符号问题，使得url更加好看

* 每次点击链接都要刷新界面的问题

* 路由页面传参刷新时参数不会丢失

* activated每次进入页面都刷新，而mounted只在第一次进入页面刷新

* **本地服务器时：**
vue的官方文档的解决办法根本行不通，还是通过后端node解决比较靠谱，连node路由都用不着，刷新不会404的解决办法就是sendFile至静态文件路径啊 靠自己翻文档解决问题，只是意外之喜。

 * 已经做好所有上传项目的准备，却发现虚拟云主机不支持node

## 注释： 

* 其实写了很多没必要的文件，但我懒得删除，留着做个爬坑纪念。





## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
cnpm run dev

# build for production with minification
cnpm run build

# build for production and view the bundle analyzer report
cnpm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
