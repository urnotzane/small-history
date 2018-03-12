var http = require("http")
var url = "http://www.imooc.com/learn/348"
var cheerio = require("cheerio")

function filterChapters(html) {
	var $ = cheerio.load(html);

	var chapters = $(".chapter")

	// [{
	// 	chapterTitle: "",
	// 	videos: [
	// 		title: "",
	// 		id: ""
	// 	]

	// }]
	
	var courseData = [];

	chapters.each(function(item) {
		var chapter = $(this);
		var chapterTitle = chapter.find("strong").text();
		var videos = chapter.find(".video").children("li");
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each (function(item) {
			var video = $(this).find(".J-media-item");
			var videoTitle = video.text();
			var id = video.attr("href").split("/video/")[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseData.push(chapterData)
	})
	return courseData;
}

function printChapterInfo(courseData) {
	//console.log(course[0].chapterTitle);
	courseData.forEach(function(item) {
		console.log(item.chapterTitle);
		item.videos.forEach(function(video) {
			console.log("		【" + video.id + "】	" + video.title)
		})
	})
}


http.get(url, function(res) {
	var html = "";
    // 获取页面数据
	res.on("data", function(data) {
		html += data
	})
    // 数据获取结束
	res.on("end", function() {
        // 通过过滤页面信息获取实际需求的信息
		var courseData = filterChapters(html);

		printChapterInfo(courseData)
	})
}).on("error", function() {
	console.log("获取课程数据出错！")
})