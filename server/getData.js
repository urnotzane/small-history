const express = require('express'),
   app = express(),
   history = require('connect-history-api-fallback'),
   path = require('path') ,
   // http = require('http'),
   request = require('request'),
   cheerio = require('cheerio'),
   he = require('he'),
   url = 'http://app.myzaker.com/';

app.use(express.static(path.join(__dirname,'../dist')));  
app.use(history());
 
console.log('express爬虫程序开始...')
 //获取文章内容
app.get ('/api/article_content', function (req, res) {
   console.log("开始从 "+req.query._url+" 获取数据")
    // res.send(req.query._url)
    const con_url = req.query._url
    // console.log(con_url)
    if (con_url !== "") {
      // console.log(con_url)
      request(con_url, function (error, response, body) {
         if (!error && response.statusCode == 200) {
            const _data = filterContent(body)
            //输出
            // console.log(_data)
            console.log("正在向服务器上传文章内容")
            res.send(_data)
         }else{
            res.send(error)
         }
      })
   }else{
      console.log("url不存在")
   }
    
    // return;
})
//获取新闻列表
app.get ('/api/article_list', function (req, res) {
   console.log("开始从 "+url+" 获取数据")
   request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         const _data = filterList(body)
         //输出
         console.log("获取到" + _data.length + "条数据")
		//  console.log(_data)
         res.send(_data)
      }else{
         res.send(error)
      }
   })
})
 
//提取并返回列表主要信息
const filterList = function (body) {
   const $ = cheerio.load(body)
   const a_list = $("#infinite_scroll").children();
   var _data = []
   //循环遍历id为#infinite_scroll的文章列表
   a_list.each(function (i, elem) {
      var param = {}

      let href = "http:" + $(this).attr("href"),
      title = $(this).find(".title").text(),
      author = $(this).find(".author").text().split("\n")[0],
      special = $(this).find(".author").children("img").length,   //author底部多了个专题图片
      date = $(this).find(".date").text(),
      img_url = $(this).find(".pic-cover").attr("style");
      img_url = getImgurl(img_url)

      //如果图片地址不为空则push数组
      if (img_url !== "" && special == 0) {
         //存入json格式
         param["href"] = href
         param["title"] = title
         param["author"] = author
         // param["special"] = special
         param["date"] = date
         param["img_url"] = img_url

         _data.push(param)
      }
   })
   return _data
}
//提取文章内容
const filterContent = function (body) {
   const $ = cheerio.load(body)
   let _data = $("#temple_title").html();
   _data += $("#content").html()
   // const title = $("#news_template_03_titleContent").text(),
   // author = he.decode($("#news_template_03_AuthorAndTime").html())
   // img_url = {};  //$(".opacity_0").attr("data-original")
   // const img_box = $("#content").find(".img_box")

   // img_box.each(function(i,elem) {
   //    img_url[i] = $(this).find("img").attr("data-original")
   // })

   // console.log(img_url + author )
   return he.decode(_data)
}


//图片url的提取，它是从元素的style中提取的
const getImgurl = function (img_url) {
   //定位"()"的索引位置
   const start = img_url.indexOf("(") + 1,
   stop = img_url.indexOf(")");

   var str = ""
   //判断是否存在这个符号，并执行相应对策
   if(start !== -1 && stop !== -1) {
      str = "http:" + img_url.substring(start, stop)
      return str
   }else{
      return str
   }
}

//解决刷新404，停留在当前页面并刷新
app.use(function(req, res, next) {
   res.status(404).sendFile(path.join(__dirname,'../dist/index.html') );
  // console.log(res.status())
});

var server = app.listen(1337, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})