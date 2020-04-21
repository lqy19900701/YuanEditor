//var express=require('express')
var app=express();
//var router=express.Router();

var mysql=require('mysql');

//var setting =require('./settings');

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:'YuanEditor'
});

function query(sql, callback) {
    db.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;

//var table ="nameedit";//要查询的数据表
//var select_sql = 'SELECT * FROM ' + table;


// function select(){
//     var arr=[];
//     db.connect((err)=>{
//         if(err) console.log(err);
//         console.log('数据库连接成功');
//     });
//     db.query(select_sql,function(err, results, fields){
//         if(err){
//             //失败，执行异常处理
//             console.log(err);
//         }else{
//             //成功，返回请求信息
//             console.log(results);
//             router.get('/',function(req,res,next){
//                 res.render('View',{
//                     data:results
//                 });
//             });
//             //var firtRow = result[0] || {};//result为数据库检索结果
//            // result.json(result)
//         }
//     });
//     db.end();
// }

// module.exports = select;
// module.exports=router;