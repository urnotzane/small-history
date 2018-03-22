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

> 本来想以今日头条做数据源，但是今日头条很小气，他做了限制抓取数据的措施，这就头疼了，一开始的前端模板都是按照今日头条做的，没办法选择了[zaker](http://app.myzaker.com/)，这个网页的数据很容易获取，只是他们大多数都是动态渲染，比如图片地址就是放在dataset的数据里，没办法只能写一个函数来获取，还好很容易。






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
