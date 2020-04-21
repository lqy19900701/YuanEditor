var mysql=require('mysql');
var setting =require('./index.js');

var settings={};

settings.db={
    host:"localhost",
    user:"root",
    password:"root",
    database:'YuanEditor'
}
module.exports=settings;
