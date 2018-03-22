# small-history

> 一个关于新闻阅读的vue项目，后端是node，数据源是[zaker](http://app.myzaker.com/)。

## 开始
### 选择vue框架及webpack打包工具
1. 安装相关环境与工具
首先要安装 Node.js， Node.js 自带了软件包管理器 npm，不过npm比较慢，我是用了淘宝的cnpm镜像，
然后用淘宝的cnpm 安装webpack：
```bash
# 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装webpack，这是全局安装
$ cnpm install webpack -g

#安装vue-cli并创建项目
$ cnpm install -g vue-cli
$ vue init webpack samll-history
$ cd samll-history
$ cnpm install
# 运行vue项目
$ cnpm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
