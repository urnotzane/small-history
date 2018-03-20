const https = require("https")
const md5 = require('md5'),
    express = require('express'),
    app = express(),
    fs = require("fs");
var url = "https://www.toutiao.com/api/pc/feed/?category=news_history&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&"

console.log("爬虫程序开始运行...")

//获取as和cp的函数
var getAscp = function() {
    var e = {};
    var t = Math.floor(new Date().getTime() / 1e3)
      , e = t.toString(16).toUpperCase()
      , i = md5(t).toString().toUpperCase();
    if (8 != e.length)
            as = "479BB4B7254C150",
            cp = "7E0AC8874BB0985"
    for (var n = i.slice(0, 5), a = i.slice(-5), s = "", o = 0; 5 > o; o++)
        s += n[o] + e[o];
    for (var r = "", c = 0; 5 > c; c++)
        r += e[c + 3] + a[c];
        as = "A1" + s + e.slice(-3),
        cp = e.slice(0, 3) + r + "E1"

        url += "as=" + as + "&cp=" + cp + "&_signature=wU2wbQAAm.VrYvDthficrcFNsH"
 }
//时间戳转换为时间
var timestampToTime = function (timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
}
//转换为几分钟前
var chaTime = function (date) {
    if(date < 60) {
        return date + "秒前";
    }else if(date >60 && date < 3600) {
        var min = parseInt(date/60);
        return min + "分钟前"
    }else{
        var hour = parseInt(date/3600)
        return hour + "小时前"
    }
}

//转换时间差
var time_trans = function(behot_time) {
    const t = new Date().getTime();
    //时间戳的差值
    const cha = parseInt(t/1000) - behot_time;
    var timeCha = "";
    if(cha < 86400) {      
        timeCha = chaTime(cha)
    }else {
        timeCha = timestampToTime(behot_time)
    }
    return timeCha
}

const filterStoryList = function(html) {
    const dataArray = JSON.parse(html).data
    const dataTime = JSON.parse(html).next.max_behot_time
    var storyData = []

    dataArray.forEach(function(item){
        var story_group_id = item.group_id
        var story_title = item.title;
        var story_href = "https://www.toutiao.com/a" + story_group_id
        var story_abstract = item.abstract;
        var story_source = item.source;
        var story_comment_counts = item.comments_count;
        var story_behot_time = item.behot_time;
        var param = {
            story_group_id: story_group_id,
            story_title: story_title,
            story_href: story_href,
            story_abstract: story_abstract,
            story_source: story_source,
            story_comment_counts: story_comment_counts,
            story_behot_time: story_behot_time
        }
        storyData.push(param)
    })
    return storyData;
}

// const printStoryInfo = function(storyData) {
//     storyData.forEach(function(item) {
//         console.log()
//         console.log("【" + item.story_group_id + "】")
//         console.log(item.story_title);
//         console.log(item.story_abstract);
//         //console.log()
//         if(item.story_comment_counts){
//             console.log(item.story_source + item.story_comment_counts + "评论" + timeInterval(item.story_behot_time)  )
//         }else{
//             console.log(item.story_source +  time_trans(item.story_behot_time))
//         }

//         console.log("链接地址：" + item.story_href)
//     })
// }

getAscp();
var _data = "";
// var getData = function () {
    https.get(url, function(res) {
        var html = '';
        // 获取页面数据
        res.on('data', function(data) {
            html += data;
        });
        // 数据获取结束
        res.on('end', function() {
            // 通过过滤页面信息获取实际需求的信息
             var storyData = filterStoryList(html);
             _data = storyData
             console.log(_data)
            // 获取的html数据是未格式化的JSON，无法使用querystring.parse进行格式化
            // console.log(JSON.parse(html).data[0])
        });
    }).on('error', function() {
        console.log('获取数据出错！') ;
    });
// }

app.get('/', function (req, res) {
    res.send(_data);
})

var server = app.listen(1337, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port) 	
})
//写文件


// getData()

// setTimeout(() => {
//     fs.writeFile('./storyList.txt',_data,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
//         if(err){
//             console.log("文件写入失败")
//         }else{
//             console.log("文件写入成功");
    
//         }
    
//     })
// }, 1000);