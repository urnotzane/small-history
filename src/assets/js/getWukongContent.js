const https = require("https")
const md5 = require('md5')
var url = "https://www.wukong.com/answer/6532026701705117966/"
var cheerio = require("cheerio")
const he = require('he')

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
    const $ = cheerio.load(html)
    var answer_data = []

    const title = $(".question-name").children("a").text(),
          text = $(".question-text").text(),
          img_src = $(".image-box").children("img").attr("src"),
          answer_num =  $(".answer-count-h").children("span").text() 
     
    var param = [
        {
            title: title,
            text: text,
            img_src: img_src,
            answer_num: answer_num
        }
    ]
    answer_data.push(param)
    $(".answer-item").each ( function (i, e){
        const answer_user_name = $(e).find(".answer-user-name").text(), //
              user_intro = $(e).find(".user-intro").text(),
              time = $(e).find(".answer-user-tag").text(),
              content = he.decode($(e).find(".answer-text-full").html());
        param = [
            {
                answer_user_name: answer_user_name,
                user_intro: user_intro,
                time: time,
                content: content
            }
        ]
        answer_data.push(param)
    })     
    return answer_data
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
