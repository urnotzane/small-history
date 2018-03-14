const https = require("https")
const md5 = require('md5')
var url = "https://m.toutiao.com/i6500481956969447950/info/?_signature=x5chUhAcnUltuGHSMLDY4ceXIU&i=6500481956969447950"
var cheerio = require("cheerio")

console.log("爬虫程序开始运行...")


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

//过滤JSON数据存入数组并返回
const filterStoryList = function(html) {
    var story_detail = JSON.parse(html).data
    var source = story_detail.detail_source,
    publish_time = time_trans(story_detail.publish_time),
    title = story_detail.title,
    content = story_detail.content;
    var story_data = [
        title = title,
        source = source,
        publish_time = publish_time,
        content = content
    ]

    return story_data
}

https.get(url, function(res) {
    var html = '';
    // 获取页面数据
    res.on('data', function(data) {
        html += data;
    });
    // 数据获取结束
    res.on('end', function() {
        // 通过过滤页面信息获取实际需求的信息
         var story_data = filterStoryList(html);
        console.log(story_data)
    });
}).on('error', function() {
    console.log('获取数据出错！');
});
