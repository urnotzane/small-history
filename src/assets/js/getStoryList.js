const http = require("https")
const md5 = require('md5')
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
getAscp();
http.get(url, function(res) {
    var html = '';
    // 获取页面数据
    res.on('data', function(data) {
        html += data;
    });
    // 数据获取结束
    res.on('end', function() {
        // 通过过滤页面信息获取实际需求的轮播图信息
         var storyData = filterStoryList(html);
         printStoryInfo(storyData)
        // 获取的html数据是未格式化的JSON，无法使用querystring.parse进行格式化
        // console.log(JSON.parse(html).data[0])
    });
}).on('error', function() {
    console.log('获取数据出错！');
});

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

function timetrans(date){
    var date = new Date(date*1000);//如果date为10位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}
//转换为几分钟前
function chaTime(date) {
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

//时间差
var timeInterval = function(behot_time) {
    const t = new Date().getTime();
    const cha = parseInt(t/1000) - behot_time;
    // console.log(timetrans(t/1000))
    // console.log(timetrans(item.story_behot_time))
    var timeCha = chaTime(cha)
    //console.log(cha)
    return timeCha
}

const printStoryInfo = function(storyData) {
    storyData.forEach(function(item) {
        console.log()
        console.log("【" + item.story_group_id + "】")
        console.log(item.story_title);
        console.log(item.story_abstract);
        //console.log()
        if(item.story_comment_counts){
            console.log(item.story_source + item.story_comment_counts + "评论" + timeInterval(item.story_behot_time)  )
        }else{
            console.log(item.story_source +  timeInterval(item.story_behot_time))
        }

        console.log("链接地址：" + item.story_href)
    })
}

