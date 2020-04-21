var express = require('express');
var cors = require('cors');
var http=require('http');
var fs=require('fs');
var path=require('path');
var url=require('url');
var router=require('./router');
var app = express();
var root=paty.resolve();

app.use(express.static("public").listen(8080))

//app.use('/', cors(), router);

//if (!module.parent) {
 // app.listen('8080', function () {
    //console.log("服务开启了");
  //});
//}
//module.exports = app;
