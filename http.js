/**
 * Created by KeKe on 2017/4/12.
 */
var http=require('http');
var serv=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<marquee>hello word!</marquee>');
});
serv.listen(3000);