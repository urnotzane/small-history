var fs = require("fs");
var data="宋茂林是好人";
fs.writeFile('./wfile.txt',data,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
     if(err){
         console.log("文件写入失败")
     }else{
         console.log("文件写入成功");

     }

}) 