#!/bin/sh node
var fs=require("fs");
var path=require("path");
fs.readdir("./",function(error,data){
    data.forEach(function(file,del){
        if(path.extname(file)==".css"){
            fs.unlinkSync(file);
            console.log("删除成功");
        }
    })
})