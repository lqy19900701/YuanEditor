"use strict";
const http = require("http"),
      fs = require("fs"),
      path = require("path"),
      url = require("url"),
      mysql=require("mysql"),
      vue=require("vue");

var dbSelect=require('./db.js');

 // 获取当前目录
 var root = path.resolve();
 // 创建服务器
 var sever = http.createServer(function(request,response){
     var pathname = url.parse(request.url).pathname;
     var filepath = path.join(root,pathname);
     // 获取文件状态
     fs.stat(filepath,function(err,stats){
       if(err){
            // 发送404响应
          response.writeHead(404);
            response.end("404 Not Found.");
        }else{
            // 发送200响应
            response.writeHead(200);
            var db=new dbSelect();
            // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
            fs.createReadStream(filepath).pipe(response);
            //response.end();
        }
    });
 });
sever.listen(8080);
// console.log('Sever is running at http://127.0.0.1:8080/');
// sever.on('request',function(request,response){
//     var url=request.url;
//     if(url==='/'||url==='/index'){
//         response.writeHead(200,{'Content-Type':'text/html'});
//         fs.readFile('./index.html','utf-8',function(err,data){
//             if(err) console.log(err);
//             response.end(data);
//         });
//     }
// })

// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"root",
//     database:'YuanEditor'
// });
// db.connect((err)=>{
//     if(err) throw err;
//     console.log('数据库连接成功');
// });
// function select(){
//     db.query('SELECT * FROM nameedit',function(err,results,fields){
//         if(err){
//             console.log(err);
//             throw err;
//         }
//         console.log(results);
//     })
// }
//db.query("sql",[params],function(err,result,fields){});
// var table ="nameedit";//要查询的数据表
// //var query = "/test"; //path参数
// var sql = 'SELECT * FROM ' + table;
// db.query(sql,function(err, results, fields){
//     if(err){
//         //失败，执行异常处理
//         console.log(err);
//     }else{
//         //成功，返回请求信息
//         console.log(results);
//         //var firtRow = result[0] || {};//result为数据库检索结果
//        // result.json(result)
//     }
// });
// db.end();
